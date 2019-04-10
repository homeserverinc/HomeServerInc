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
use App\FilteredLead;
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
use App\Events\EmailNotification;
use Faker\Factory as Faker;

class LeadsController extends HomeServerController
{

    use ApiResponse;

    public $fields = [
        'uuid' => 'UUID',
        'category.category' => 'Category',
        'customer.first_name' => 'Customer',
        'customer.email1' => 'Email',
        'customer.phone1' => 'Phone',
        'closed' => [
            'label' => 'Closed',
            'type' => 'bool'
        ],
        'created_at' => 'Created',
        
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
            
            if(!Auth::user()->hasRole('contractor')){
                if ($request->searchField) {
                    $leads = Lead::whereHas('customer', function($query) use($request) {
                        $query->where('customers.first_name', 'like', '%'.$request->searchField.'%');
                    })->orWhereHas('category', function($query) use($request){
                        $query->where('categories.category', 'like', '%'.$request->searchField.'%');
                    })->orderBy('leads.created_at', 'desc')->doesntHave('filtered_lead')->doesntHave('contractors')->paginate();
                } else {
                    $leads = Lead::orderBy('leads.created_at', 'desc')->doesntHave('filtered_lead')->doesntHave('contractors')
                                ->paginate();
                }
                
            }else{
                if ($request->searchField) {
                    $leads = Lead::whereHas('contractors', function($query){
                        $query->where('contractors.uuid', '=', Auth::user()->contractor->uuid);
                    })->whereHas('customer', function($query) use($request) {
                        $query->where('customers.first_name', 'like', '%'.$request->searchField.'%');
                    })->orWhereHas('category', function($query) use($request){
                        $query->where('categories.category', 'like', '%'.$request->searchField.'%');
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
            $this->validate($request, [
                'phone1' => 'string|required|max:25',
                'email1' => 'email|required|max:100|unique:customers,email1',
                'first_name' => 'string|required',
            ]);
            try {
                DB::beginTransaction();
                $request['verified_data'] = $request['verified_data'] ?? false;
                $request['unique'] = $request['unique'] ?? false;
                $customer = Customer::firstOrNew([
                    'first_name' => $request->first_name,
                    'email1' => $request->email1
                ]); 
    
                $customer->fill($request->all());
    
                $customer = $this->createRecord($customer, false);
    
                $lead = new Lead($request->all());

                //dd($request->category_uuid);
    
                $lead->customer_uuid = $customer->uuid;

                $lead->category_lead_uuid = $this->categorize_lead($lead)->uuid;
                

                $lead->questions = $request->questions;
                $lead->category_uuid = $request->category_uuid;
    
                $lead = $this->createRecord($lead, false);

                event(new EmailNotification($lead->customer));
                event(new AssociateLeads($lead));
                
                DB::commit();
    
                return $this->updateSuccess($lead);
        
            } catch (\Exception $e) {
                DB::rollback();
    
                return $this->getApiResponse($e, 'error');
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
        $this->validate($request, [
            'phone1' => 'string|required|max:25',
            'email1' => 'email|required|max:100|unique:customers,email1,'.$lead->customer->uuid.',uuid',
            'first_name' => 'string|required',
        ]);
        try {
            DB::beginTransaction();
            $request['verified_data'] = $request['verified_data'] ?? false;
            $request['unique'] = $request['unique'] ?? false;
            $customer = Customer::firstOrNew([
                'first_name' => $request->first_name,
                'email1' => $request->email1
            ]);            

            $customer->fill($request->all());

            $customer = $this->updateRecord($customer, false);


            $lead->fill($request->all());

            $lead->customer_uuid = $customer->uuid;
            $lead->questions = $request->questions;
            $lead->category_uuid = $request->category_uuid;

            $lead = $this->updateRecord($lead, false);
            if($request->filled('verified_data') && $lead->verified_data){
                $lead->filtered_lead->update(['user_id' => Auth::id(), 'accepted' => true]);
            }
            
            DB::commit();

            return $this->updateSuccess($lead);
    
        } catch (\Exception $e) {
            DB::rollback();

            return $this->getApiResponse($e, 'error');
        } 
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

        $data->customer = json_decode($data->customer);
        $data->questions = json_decode($data->questions);
        
        try {
            DB::beginTransaction();

            $customer = Customer::firstOrNew([
                'first_name' => $data->customer->first_name,
                'email1' => $data->customer->email1
            ]);            

            $customer->fill(json_decode(json_encode($data->customer), true));
            
            /**
             * ToDo:
             * Make a method that gerenate email address with 
             * random mail providers and random patterns (regex)
             * based on the customer data.
             */

            /* if(!$customer->email1){
                $faker = Faker::create();
                $customer->email1 = $faker->email;
            } */

            $customer = $this->createRecord($customer, false);
            
            $lead = Lead::firstOrNew([
                'customer_uuid' => $customer->uuid,
                'closed' => false,
                'verified_data' => false
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

            DB::commit();

            if($customer->email1) {
                event(new EmailNotification($newLead->customer));
            }
            event(new AssociateLeads($newLead));            

            return $this->getApiResponse('Ok');
    
        } catch (\Exception $e) {
            DB::rollback();

            return $this->getApiResponse($e, 'error');
        } 
    }

    public function apiPreLeadStore(Request $request) {
        try {
            $data = json_decode(json_encode($request->all()));
            $data->customer = json_decode($data->customer);
            
            DB::beginTransaction();

            $customer = Customer::firstOrNew([
                'first_name' => $data->customer->first_name,
                'email1' => $data->customer->email1
            ]);            

            $customer->fill(json_decode(json_encode($data->customer), true));

            $customer = $this->createRecord($customer, false);

            $lead = Lead::firstOrNew([
                'customer_uuid' => $customer->uuid,
                'closed' => false,
                'category_uuid' => null
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
        $json_array = json_decode($lead->questions, true);
        foreach ($json_array['answeredQuestions'] as $question) {
            foreach ($question['selected_answers'] as $answer) {
                if (is_array($answer)) {
                    /* Multi options question */
                    foreach($answer as $checkedAnswer) {
                        $weight += Answer::find($checkedAnswer)->weight ?? 0;
                    }
                } else {
                    /* Single choice question */
                    $weight += Answer::find($answer)->weight ?? 0;
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

    public function apiGetLead(Lead $lead) {
        try {
            return $this->getApiResponse(
                        Lead::with('customer')
                            ->with('category')
                            ->find($lead->uuid));
        } catch (\Exception $e) {
            return $this->getApiResponse($e, 'error');
        }
    }

    public function dispatch_lead(Request $request){
        if (Auth::user()->canUpdateLead()) {
            try{
                $lead = Lead::findOrFail($request->input('lead'));
                $lead->closed=1;
                $lead->verified_data=1;
                $lead->update();
                event(new AssociateLeads($lead));
                return response()->json(['success' => true, 'message' => 'Lead dispatched!']);

            }catch(\Exception $e){
                return $this->getApiResponse($e, 'Lead not found or cannot be dispatched');
            }
        }
    }

}
