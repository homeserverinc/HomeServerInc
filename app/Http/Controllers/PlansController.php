<?php

namespace App\Http\Controllers;

use App\Plan;
use Stripe;
use Config;
use App\Contractor;
use App\CategoryLead;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\HomeServerController;

class PlansController extends HomeServerController
{
    use ApiResponse;

    public $fields = [
        'name' => 'Name',
        'description' => 'Description',
        'price' => 'Price',
        'interval' => 'Interval',
        'interval_count' => 'Interval Count',
        'qnt_leads' => 'Qnt. Leads',
    ];

    public $modelName = 'plan';
    public $recordName = 'name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadPlan()) {
            if ($request->searchField) {
                $plans = Plan::where('name', 'like', '%'.$request->searchField.'%')
                    ->orWhere('description', 'like', '%'.$request->searchField.'%')
                    ->orderBy('created_at', 'desc')
                    ->paginate();
            } else {
                $plans = Plan::orderBy('created_at', 'desc')
                    ->paginate();
            }
        } else {
            return $this->accessDenied();
        }

        return View('plan.index', [
            'fields' => $this->fields,
            'plans' => $plans
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreatePlan()) {
            $intervals = Config::get('constants.intervals');
            $category_leads = CategoryLead::all();
            return View('plan.create', ['intervals' => $intervals, 'category_leads' => $category_leads]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         if (Auth::user()->canCreatePlan()) {
            $this->validate($request, [
                'name' => 'required|string|max:100',
                'description' => 'required|string|between:10, 150',
                'price' => 'nullable|numeric|min:0|required_unless:interval,lead',
                'interval_count' => 'nullable|numeric|digits_between:0,120',
                'interval' => 'required|string',
                'qnt_leads' => 'nullable|numeric|min:0|required_unless:interval,lead',
                'unique_leads' => 'nullable|boolean',
                'share_count' => 'nullable|numeric',
            ]);
            $request['unique_leads'] = $request['unique_leads'] ?? false;
            $request['price'] = $request['interval'] == 'lead' ? 0 : $request['price'] ?? 0;
            
            try {
                DB::beginTransaction();

                $plan = new Plan($request->all());
                $this->createRecord($plan, false);
                $plan->category_leads()->sync($request->input("category_leads") ?? CategoryLead::all());

                $stripe_plan = Stripe::plans()->create([
                    'id'                   => $plan->uuid,
                    'name'                 => $plan->name,
                    'amount'               => (float) $plan->price,
                    'currency'             => 'USD',
                    'interval'             => $plan->interval == 'lead' ? 'week' : $plan->interval,
                    'interval_count'       => $plan->interval_count ?? null,
                    'metadata'             => ['description' => $plan->description],
                ]);
                
                $plan->stripe_id = $stripe_plan['id'];
                $plan = $this->updateRecord($plan);
                DB::commit();

                return $plan;

            } catch (\Exception $e) {
                // Stripe::plans()->delete($plan->uuid);
                DB::rollback();
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Plan  $plan
     * @return \Illuminate\Http\Response
     */
    public function edit(Plan $plan)
    {
        if (Auth::user()->canUpdatePlan()) {
            $intervals = Config::get('constants.intervals');
            $category_leads = CategoryLead::all();
            return View('plan.edit', ['plan' => $plan, 'intervals' => $intervals, 'category_leads' => $category_leads]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Plan  $plan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Plan $plan)
    {
         if (Auth::user()->canUpdatePlan()) {
            $this->validate($request, [
                'name' => 'required|string|max:100',
                'description' => 'required|string|between:10, 150',
                'price' => 'nullable|numeric|min:0|required_unless:interval,lead',
                'interval_count' => 'nullable|numeric|digits_between:0,120',
                'interval' => 'required|string',
                'qnt_leads' => 'nullable|numeric|min:0|required_unless:interval,lead',
                'unique_leads' => 'nullable|boolean',
                'share_count' => 'nullable|numeric',
            ]);
            $request['unique_leads'] = $request['unique_leads'] ?? false;
            $request['price'] = $request['interval'] == 'lead' ? 0 : $request['price'] ?? 0;
            try {
                DB::beginTransaction();

                $plan->fill($request->all());
                $plan->category_leads()->sync($request->input("category_leads"));
                
                Stripe::plans()->update($plan->uuid, [
                    'name'                 => $plan->name,
                    'metadata'             => ['description' => $plan->description],
                ]);

                $plan = $this->updateRecord($plan, true);

                DB::commit();

                return $plan;

            } catch (\Exception $e) {
                DB::rollback();
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Plan  $plan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Plan $plan)
    {
        if (Auth::user()->canDeletePlan()) {
            try{
                Stripe::plans()->delete($plan->uuid);
            }catch (\Exception $e) {

            }
            return $this->deleteRecord($plan);
        } else {
            return $this->accessDenied();
        }
    }
}
