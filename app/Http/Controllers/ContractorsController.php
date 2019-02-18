<?php

namespace App\Http\Controllers;

use App\Contractor;
use App\User;
use App\Role;
use App\Site;
use App\Plan;
use App\Category;
use App\Subscription;
use App\Charge;
use App\Card;
use Stripe;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use App\Events\NewContractor;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\HomeServerController;

class ContractorsController extends HomeServerController
{
    use ApiResponse;

    public $fields = [
        'uuid' => 'UUID',
        'user.name' => 'Name',
        'company' => 'Company',
        'phone' => 'Phone',
        'address' => 'Address',
        'plan.name' => 'Plan',
        'created_at' => 'Created',
    ];

    public $modelName = 'contractor';
    public $recordName = 'company';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadContractor()) {
            if ($request->searchField) {
                $contractors = Contractor::where('name', 'like', '%'.$request->searchField.'%')
                    ->orWhere('company', 'like', '%'.$request->searchField.'%')
                    ->orderBy('created_at', 'desc')
                    ->paginate();
            } else {
                $contractors = Contractor::orderBy('created_at', 'desc')
                    ->paginate();
            }
        } else {
            return $this->accessDenied();
        }

        return View('contractor.index', [
            'fields' => $this->fields,
            'contractors' => $contractors
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateContractor()) {
            $sites = Site::all();
            $plans = Plan::all();
            $categories = Category::all();

            $months = [];
            for($i=1; $i < 13; $i++) $months[$i] = $i;
            $years = [];
            for($i=date('Y'); $i < date('Y')+20; $i++) $years[$i] = $i;

            return View('contractor.create', ['sites' => $sites, 'plans' => $plans, 'months' => $months, 'years' => $years, 'categories' => $categories]);
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
        if (Auth::user()->canCreateContractor()) {
            $this->validate($request, [
                'users.name' => 'required|string|max:100',
                'users.email' => 'required|email|max:100|unique:users',
                'users.password' => 'required|alpha_num|min:6,20|confirmed',
                'address' => 'required|string|max:100',
                'company' => 'required|string|max:100',
                'phone' => 'string|max:20',
                'ein' => 'required_without_all:ssn|nullable|alpha_num|max:20|',
                'ssn' => 'alpha_num|max:20|required_without_all:ein|nullable',
                'site_uuid' => 'nullable|unique:sites',
                'plan_uuid' => 'nullable|exists:plans,uuid',
                'charge' => 'nullable|numeric',
                'card_number' => 'nullable|string|required_with_all:exp_month,exp_year,cvc',
                'exp_month' => 'nullable|integer|required_with_all:card_number,exp_year,cvc',
                'exp_year' => 'nullable|integer|required_with_all:card_number,exp_month,cvc',
                'cvc' => 'nullable|integer|required_with_all:exp_month,exp_year,card_number',
            ]);
            
            try {
                DB::beginTransaction();
                //create user data
                $data = $request->all()['users'];
                $data['password'] = bcrypt($data['password']);

                $user = new User($data);
                //create contractor data
                $contractor = new Contractor($request->all());

                //save user data
                $user = $this->createRecord($user, false);
                //attachRole contractor
                $user->attachRole(Role::where('name', '=', 'contractor')->first());
                $contractor->user_id = $user->id;
                //save striper customer
                $customer = Stripe::customers()->create([
                    'email' => $user->email,
                    'description' => $contractor->company . ' - ' . $contractor->phone
                ]);
                //set stripe id retrived to contractor
                $contractor->stripe_id = $customer['id'];
                //save contractor data
                $contractor = $this->createRecord($contractor, false);
                $contractor->categories()->attach($request->input("categories"));

                //generate token stripe card
                if($request->filled('card_number')){
                    $token = Stripe::tokens()->create([
                        'card' => [
                            'number'    => $request->input('card_number'),
                            'exp_month' => (int) $request->input('exp_month'),
                            'cvc'       => (int) $request->input('cvc'),
                            'exp_year'  => (int) $request->input('exp_year'),
                            'address_city' => $request->input('address'),
                            'name' => $request->input('users.name'),
                        ],
                    ]);
                    //create stripe card for contractor
                    $card = Stripe::cards()->create($contractor->stripe_id,  $token['id']);
                    //save shor info about card in cards table
                    $card = new Card([
                        'card_brand' => $card['brand'],
                        'card_last_four' => $card['last4'],
                        'exp_month' => $card['exp_month'],
                        'exp_year' => $card['exp_year'],
                        'default' => 1,
                        'active' => 1,
                        'contractor_uuid' => $contractor->uuid,
                        'stripe_id' => $card['id'],
                        'token' => $token['id']
                    ]);
                    $card = $this->createRecord($card, false);
                }

                //charge amount wallet
                if($request->filled('charge')){
                   $charge = Stripe::charges()->create([
                        'customer' => $contractor->stripe_id,
                        'currency' => 'USD',
                        'amount'   => (float) $request->input('charge'),
                    ]);

                   $charge = new Charge([
                        'amount' => (float) $request->input('charge'),
                        'contractor_uuid' => $contractor->uuid,
                        'stripe_id' => $charge['id'],
                        'description' => 'Charge of '.((float) $request->input('charge')).' to '.$contractor->user->name.'.',
                        'card_uuid' => $card->uuid
                   ]);

                   $charge = $this->createRecord($charge, false);

                   $contractor->increment('wallet', $charge->amount);
                   
                }

                 //subscribe contractor to plan
                if($request->filled('plan_uuid') && $contractor->wallet >= $contractor->plan->price){
                    // $subscription = Stripe::subscriptions()->create($contractor->stripe_id, [
                    //     'plan' => $contractor->plan->uuid,
                    // ]);
                    //record subs to db
                    $subs = new Subscription([
                        'contractor_uuid' => $contractor->uuid,
                        'plan_uuid' => $contractor->plan->uuid,
                        'name' => $contractor->plan->name,
                        'stripe_id' => null,
                        'closed' => 0,
                        'trial_ends_at' => null,
                        'ends_at' => \Carbon\Carbon::now()->addWeeks(1),
                    ]);

                    $contractor->decrement('wallet', $contractor->plan->price);

                    $subs = $this->createRecord($subs);
                }

                
                $contractor = $this->updateRecord($contractor, false);
                DB::commit();

                return $this->createSuccess($contractor);

            } catch (\Exception $e) {
                Stripe::customers()->delete($contractor->stripe_id);
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
     * @param  \App\Contractor  $contractor
     * @return \Illuminate\Http\Response
     */
    public function edit(Contractor $contractor)
    {
        if (Auth::user()->canUpdateContractor()) {
            $contractor->card = Stripe::cards()->find($contractor->stripe_id, $contractor->default_card()->first()->stripe_id);
            $sites = Site::all();
            $plans = Plan::all();
            $categories = Category::all();
            $months = [];
            for($i=1; $i < 13; $i++) $months[$i] = $i;
            $years = [];
            for($i=date('Y'); $i < date('Y')+20; $i++) $years[$i] = $i;
            return View('contractor.edit', ['contractor' => $contractor, 'sites' => $sites, 'plans' => $plans, 'years' => $years, 'months' => $months, 'categories' => $categories]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Contractor  $contractor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contractor $contractor)
    {
        if (Auth::user()->canUpdateContractor()) {
            $this->validate($request, [
                'users.name' => 'required|string|max:100',
                'users.email' => 'required|email|max:100|unique:users,email,'.$contractor->user->id,
                'users.password' => 'nullable|alpha_num|min:6,20|confirmed',
                'address' => 'required|string|max:100',
                'company' => 'required|string|max:100',
                'phone' => 'string|max:20',
                'ssn' => 'string|max:20|required_without:ein|nullable',
                'ein' => 'string|max:20|required_without:ssn|nullable',
                'site_uuid' => 'nullable|unique:sites',
                'card_number' => 'nullable|string|required_with_all:exp_month,exp_year',
                'exp_month' => 'nullable|integer|required_with_all:card_number,exp_year',
                'exp_year' => 'nullable|integer|required_with_all:card_number,exp_month',
                'categories' => 'required',
            ]);
            try {
                DB::beginTransaction();

                $data = $request->all()['users'];
                
                $contractor->user->name = $data['name'];
                $contractor->user->email = $data['email'];
                $contractor->user->password = $data['password'] !== null ? bcrypt($data['password']) : $contractor->user->password;
                $user = $this->updateRecord($contractor->user, false);
                $contractor->categories()->detach();
                $contractor->categories()->attach($request->input("categories"));
                $contractor->fill($request->all());

                if($request->exists('card_number')){
                    $card = Stripe::cards()->update($contractor->stripe_id, $contractor->default_card()->first()->stripe_id, [
                        'name'          => $contractor->user->name,
                        'address_city' => $contractor->address,
                        'exp_month' => (int) $request->input('exp_month'),
                        'exp_year' => (int) $request->input('exp_year'),
                    ]);
                }

                $contractor = $this->updateRecord($contractor);

                DB::commit();

                return $contractor;

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
     * @param  \App\Contractor  $contractor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contractor $contractor)
    {
        if (Auth::user()->canDeleteContractor()) {
            //all dependecies are deleted in model
            
            Stripe::customers()->delete($contractor->stripe_id);
            
            return $this->deleteRecord($contractor);
        } else {
            return $this->accessDenied();
        }
    }

    /**
    *Subscribe or active a plan to contractor
    */
    public function subscribe_plan(Request $request){

        if (Auth::user()->canCreateSubscription()) {
            
            $plan = Plan::find($request->input('plan'));
            $contractor = $request->user()->contractor;

            try {
            
                DB::beginTransaction();
                if($contractor->wallet >= $plan->price){
                    $subs = Subscription::where('contractor_uuid' , '=', $contractor->uuid)->latest()->first();
                    if($subs){
                        $subs->closed = 1;
                        $subs->update();

                    }
                    $subs = new Subscription([
                        'contractor_uuid' => $contractor->uuid,
                        'plan_uuid' => $plan->uuid,
                        'name' => $plan->name,
                        'stripe_id' => null,
                        'closed' => 0,
                        'trial_ends_at' => null,
                        'ends_at' => \Carbon\Carbon::now()->addWeeks(1),
                    ]);

                    $subs = $this->createRecord($subs);

                    $contractor->plan_uuid = $plan->uuid;


                    $charge = new Charge([
                        'amount' => -(float) $plan->price,
                        'contractor_uuid' => $contractor->uuid,
                        'stripe_id' => null,
                        'description' => 'Plan '.$plan->name.' activation: -$'.((float) $plan->price).' to '.$contractor->user->name.'.',
                        'card_uuid' => $contractor->default_card()->first()->uuid
                    ]);

                    $charge = $this->createRecord($charge, false);

                    $contractor->decrement('wallet', $plan->price);
                
                    $this->updateRecord($contractor);

                   
                    DB::commit();
                    return response()->json(['success' => true, 'message' => 'Plan acquired with success!']);
                }else{
                    return response()->json(['success' => false, 'message' => 'Insuficient founds!']);
                }
                
            } catch (\Exception $e) {
                DB::rollback();
                return $this->getApiResponse($e->getMessage(), 'error', $request->all());
            }
        }
    }

    public function apiStore(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3',
            'company' => 'required',
            'email' => 'required|email'
        ]);

        if ($validator->fails()) {
            return $this->getApiResponse($validator, 'fail', $request->all());
        }
       
        try {
            
            DB::beginTransaction();
            
            $contractor = new Contractor($request->all());

            $contractor->save();
            DB::commit();

            /* send an SMS */
            event(new NewContractor($contractor, env('SMS_TO_NUMBER')));

            return $this->getApiResponse($contractor);
        } catch (\Exception $e) {
            
            DB::rollback();
            return $this->getApiResponse($e->getMessage(), 'error', $request->all());
        }
    }
}
