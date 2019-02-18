<?php

namespace App\Http\Controllers;

use App\City;
use App\Lead;
use App\Site;
use App\State;
use App\Contact;
use App\Service;
use App\Customer;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class LeadsController extends HomeServerController
{

    use ApiResponse;

    public $fields = [
        'uuid' => 'UUID',
        'service_description' => 'Service',
        'first_name' => 'Customer',
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
            if ($request->searchField) {
                $leads = DB::table('leads')
                            ->select('leads.*', 'customers.first_name', 'services.service_description')
                            ->join('customers', 'customers.uuid', 'leads.customer_uuid')
                            ->join('services', 'services.uuid', 'leads.service_uuid')
                            ->where('customers.first_name', 'like', '%'.$request->searchField.'%')
                            ->orWhere('services.service_description', 'like', '%'.$request->searchField.'%')
                            ->orderBy('leads.created_at', 'desc')
                            ->paginate();
            } else {
                $leads = DB::table('leads')
                            ->select('leads.*', 'customers.first_name', 'services.service_description')
                            ->join('customers', 'customers.uuid', 'leads.customer_uuid')
                            ->join('services', 'services.uuid', 'leads.service_uuid')
                            ->orderBy('leads.created_at', 'desc')
                            ->paginate();
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
            $states = State::all();
            $cities = City::limit(0)->get();
            $customers = Customer::all();
            $services = Service::all();

            return View('lead.create')
                    ->withStates($states)
                    ->withCities($cities)
                    ->withCustomers($customers)
                    ->withServices($services);
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
        return response()->json($request->all());
        if (Auth::user()->canCreateLead()) {
            try {
                DB::beginTransaction();

                $customer = Customer::firstOrNew([
                    'name' => $request->customer,
                    'email1' => $request->email1
                ]);            

                $customer->fill($request->all());
                $customer = $this->createRecord($customer, false);
                
                $lead = new Lead($request->all());
                $lead->customer_id = $customer->id;
                $lead->user_id = Auth::id();

                $this->createRecord($lead);
                
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
        $services = Service::all();

        return View('lead.edit')->withLead($lead)
                                ->withServices($services);
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

    public function getServiceProperties(Request $request) {
        $properties = DB::table('property_service')
                                ->select('property_name')
                                ->join('properties', 'properties.id', 'property_service.property_id')
                                ->where('property_service.service_id', $request->service_id)
                                ->get();
        $values = array();
        foreach($properties as $property) {
            $value_name = $property->property_name;
            $values[$property->property_name] = $request->$value_name;
        }

        return json_encode($values);
    }

    public function apiStore(Request $request) {
        $data = json_decode(json_encode($request->all()));
        
        try {
            DB::beginTransaction();

            $customer = Customer::firstOrNew([
                'first_name' => $data->customer->first_name,
                'last_name' => $data->customer->last_name,
                'email1' => $data->customer->email1
            ]);            

            $customer->fill(json_decode(json_encode($data->customer), true));

            $customer = $this->createRecord($customer, false);
            
            $lead = Lead::firstOrNew([
                'uuid' => $data->lead_uuid
            ]);

            $lead->deadline = $data->deadline;
            $lead->project_details = $data->additionalInfo;
            $lead->service_uuid = $data->service_uuid;
            $lead->quiz_uuid = $data->quiz_uuid;
            $lead->customer_uuid = $customer->uuid;
            $lead->verified_data = ($data->verified_data == 'true');
            $lead->questions = json_encode($data->questions);

            $newLead = $this->createRecord($lead, false);
            
            DB::commit();

            return $this->getApiResponse($newLead);
    
        } catch (\Exception $e) {
            DB::rollback();

            return $this->getApiResponse($e, 'error');
        } 
    }
}
