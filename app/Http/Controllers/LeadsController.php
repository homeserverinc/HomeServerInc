<?php

namespace App\Http\Controllers;

use App\City;
use App\Lead;
use App\Site;
use App\State;
use App\Contact;
use App\Answer;
use App\Category;
use App\CategoryLead;
use App\Customer;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;
use App\Events\AssociateLeads;

class LeadsController extends HomeServerController
{

    use ApiResponse;

    public $fields = [
        'category.category' => 'Category',
        'customer.first_name' => 'Customer',
        'created_at' => 'Created',
        'closed' => [
            'label' => 'Closed',
            'type' => 'bool'
        ]
    ];

    protected $modelName = 'lead';
    protected $recordName = 'uuid';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadLead()) {
            
            if(Auth::user()->hasRole('superadministrator')){
                if ($request->searchField) {
                    $leads = Lead::whereHas('customers', function($query) use($request) {
                        $query->where('customers.first_name', 'like', '%'.$request->searchField.'%');
                    })->orWhereHas('categories', function($query) use($request){
                        $query->where('categories.name', 'like', '%'.$request->searchField.'%');
                    })->orderBy('leads.created_at', 'desc')->paginate();
                } else {
                    $leads = Lead::orderBy('leads.created_at', 'desc')
                                ->paginate();
                }
                
            }else{
                if ($request->searchField) {
                    $leads = Lead::whereHas('contractors', function($query){
                        $query->where('contractors.uuid', '=', Auth::user()->contractor->uuid);
                    })->whereHas('customers', function($query) use($request) {
                        $query->where('customers.first_name', 'like', '%'.$request->searchField.'%');
                    })->orWhereHas('categories', function($query) use($request){
                        $query->where('categories.name', 'like', '%'.$request->searchField.'%');
                    })->orderBy('leads.created_at', 'desc')->paginate();
                } else {
                    $leads = Lead::whereHas('contractors', function($query){
                        $query->where('contractors.uuid', '=', Auth::user()->contractor->uuid);
                    })->orderBy('leads.created_at', 'desc')
                                ->paginate();
                }
            }
            

            return View('lead.index', [
                'leads' => $leads,
                'fields' => $this->fields
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateLead()) {
            
            $customers = Customer::all();
            $categories = Category::all();
            $category_leads = CategoryLead::all();

            return View('lead.create', ['category_leads' => $category_leads])
                    ->withCustomers($customers)
                    ->withCategories($categories);
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
        
        if (Auth::user()->canCreateLead()) {
            try {
                DB::beginTransaction();

                $customer = Customer::firstOrNew([
                    'first_name' => $request->customer,
                    'email1' => $request->email1
                ]);            

                $customer->fill($request->all());
                $customer = $this->createRecord($customer, false);
                $lead = new Lead($request->all());
                $lead->customer_uuid = $customer->uuid;
                $lead = $this->createRecord($lead, false);
                event(new AssociateLeads($lead));

                DB::commit();

                return $this->createSuccess($lead);
        
            } catch (\Exception $e) {
                DB::rollback();

                return $this->doOnException($e);
            } 
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function show(Lead $lead)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function edit(Lead $lead)
    {
        $categories = Category::all();
        $category_leads = CategoryLead::all();
        return View('lead.edit')->withLead($lead)
                                ->withCategories($categories)
                                ->withCategoryLeads($category_leads);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Lead  $leadcustomer_
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Lead $lead)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lead $lead)
    {
        if (Auth::user()->canDeleteLead()) {
            return $this->deleteRecord($lead);
        } else {
            return $this->accessDenied();
        }
    }

    public function createFromContact($id) {
        $contact = Contact::find($id);
        $city = City::where('city', '=', $contact->city)->first();
        $cities = City::all();
        $states = State::all();
        

        return View('lead.create', [
            'contact' => $contact,
            'city' => $city,
            'cities' => $cities,
            'states' => $states
        ]);
    }

    public function apiStore(Request $request) {
        $data = json_decode(json_encode($request->all()));

        Log::debug(json_decode(json_encode($request->all()), true));
        
        try {
            DB::beginTransaction();

            if ($data->customer->uuid) {
                $customer = Customer::find($data->customer->uuid);
            } else {
                $customer = Customer::firstOrNew([
                    'first_name' => $data->customer->first_name,
                    'email1' => $data->customer->email1
                ]);            
            }

            //Log::debug(json_decode(json_encode($data->customer), true));

            $customer->fill(json_decode(json_encode($data->customer), true));

            $customer = $this->createRecord($customer, false);
            
            $lead = Lead::firstOrNew([
                'uuid' => $data->lead_uuid
            ]);

            $lead->deadline = $data->deadline;
            $lead->project_details = $data->project_details;
            $lead->category_uuid = $data->category_uuid;
            $lead->quiz_uuid = $data->quiz_uuid;
            $lead->customer_uuid = $customer->uuid;
            $lead->verified_data = ($data->verified_data == 'true');
            $lead->questions = json_encode($data->questions);
            $lead->category_lead_uuid = $this->categorize_lead($lead)->uuid;
            $newLead = $this->createRecord($lead, false);
            event(new AssociateLeads($newLead));
            DB::commit();

            return $this->getApiResponse($newLead);
    
        } catch (\Exception $e) {
            DB::rollback();

            return $this->getApiResponse($e, 'error');
        } 
    }

    public function apiPreLeadStore(Request $request) {
        try {
            $data = json_decode(json_encode($request->all()));
            DB::beginTransaction();

            $customer = Customer::firstOrNew([
                'first_name' => $data->customer->first_name,
                'email1' => $data->customer->email1
            ]);            

            $customer->fill(json_decode(json_encode($data->customer), true));

            $customer = $this->createRecord($customer, false);

            $lead = new Lead([
                'customer_uuid' => $customer->uuid
            ]);

            $newLead = $this->createRecord($lead, false);

            DB::commit();

            return $this->getApiResponse($newLead);

        } catch (\Exception $e) {
            DB::rollback();
            
            return $this->getApiResponse($e, 'error');
        }
    }

    public function categorize_lead(Lead $lead){
        $weight = 0;
        $json_array = json_decode(json_decode($lead->questions), true);
        foreach ($json_array as $question) {
            foreach ($question['selected_answers'] as $answer) {
                if(Answer::find($answer) !== null && Answer::find($answer)->count() > 0){
                    $weight += Answer::find($answer)->weight;
                }
            }
        }
        $category = Category::find($lead->category_uuid);
        $selected = null;
        if($category !== null){
            $category_leads = $category->category_leads->sortBy('pivot.weight');
            $min = 0;
            $max = $category_leads->shift();
            foreach($category_leads as $category_lead){
                if($weight >= $min && $weight <= $max->pivot->weight){
                    $selected = $max;
                    break;
                }else{
                    $min = $max->pivot->weight;
                    $max = $category_lead;
                    if($max == $category_leads->last()){
                        $selected = $max;
                        break;
                    }
                }
            }
        }
        

        return $selected;
    
    }
}
