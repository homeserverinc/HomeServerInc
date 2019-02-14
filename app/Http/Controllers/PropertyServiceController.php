<?php

namespace App\Http\Controllers;

use App\Service;
use App\Property;
use App\PropertyService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;

class PropertyServiceController extends Controller
{
    public $fields = [
        'id' => 'ID',
        'service_description' => 'Service',
        'property_label' => 'Property',
        'is_required' => [
            'label' => 'Required', 
            'type' => 'bool'
        ]
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->searchField) {
            $propertyServices = DB::table('property_service')
                                    ->select('property_service.*', 'services.service_description', 'properties.property_label')
                                    ->join('services', 'services.id', 'property_service.service_id')
                                    ->join('properties', 'properties.id', 'property_service.property_id')
                                    ->where('services.description', 'like', '%'.$request->searchField.'%')
                                    ->orWhere('properties.label', 'like', '%'.$request->searchField.'%')
                                    ->orWhere('properties.name', 'like', '%'.$request->searchField.'%')
                                    ->orderBy('property_service.service_id', 'desc')
                                    ->paginate();
        } else {
            $propertyServices = DB::table('property_service')
                                    ->select('property_service.*', 'services.service_description', 'properties.property_label')
                                    ->join('services', 'services.id', 'property_service.service_id')
                                    ->join('properties', 'properties.id', 'property_service.property_id')
                                    ->orderBy('property_service.service_id', 'desc')
                                    ->paginate(); 
        }

        return View('property_service.index', [
            'propertyServices' => $propertyServices,
            'fields' => $this->fields
        ]);                        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $services = Service::all();
        $properties = Property::all();

        return View('property_service.create', [
            'services' => $services,
            'properties' => $properties
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'service_id' => 'required',
            'property_id' => 'required'
        ]);

        try {
            $propertyService = new PropertyService;
            $propertyService->service_id = $request->service_id;
            $propertyService->property_id = $request->property_id;
            $propertyService->is_required = $request->is_required;
            $propertyService->field_size = $request->field_size;
            $propertyService->property_options = str_replace('\r', '', json_encode(explode(PHP_EOL, $request->property_options), JSON_FORCE_OBJECT));

            $propertyService->save();
            $property = Property::find($request->property_id)->property_name;
            $service = Service::find($request->service_id)->service_description;
            Session::flash('success', 'Property '.$property.' successfull assigned with the service '.$service);
            return redirect()->action('PropertyServiceController@index');
        } catch (\Exception $e) {
            Session::flash('error', 'Oops, have one error...'.$e->getMessage());
            return redirect()->back(Input::all());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PropertyService  $propertyService
     * @return \Illuminate\Http\Response
     */
    public function show(PropertyService $propertyService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PropertyService  $propertyService
     * @return \Illuminate\Http\Response
     */
    public function edit(PropertyService $propertyService)
    {
        $services = Service::all();
        $properties = Property::all();
        $propertyService = PropertyService::find($propertyService->id);
        
        if ($propertyService->property->property_type_id == 9) {
            $propertyOptions = implode('&#13;&#10;', json_decode($propertyService->property_options, true));
        } else {
            $propertyOptions = '';
        }


        return View('property_service.edit', [
            'services' => $services,
            'properties' => $properties,
            'propertyService' => $propertyService,
            'propertyOptions' => $propertyOptions
        ]);
    }

    /**
     * Update the specified resource in storage.                        
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PropertyService  $propertyService
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PropertyService $propertyService)
    {
        if (Auth::user()->canUpdatepropertyService()) {
            try {
                $propertyService = PropertyService::find($propertyService->id);

                $propertyService->field_size = $request->field_size;
                $propertyService->is_required = $request->is_required;
                $propertyService->property_options = str_replace('\r', '', json_encode(explode(PHP_EOL, $request->property_options), JSON_FORCE_OBJECT));

                if ($propertyService->save()) {
                    Session::flash('success', 'Service Property association successfull updated');
                    return redirect()->action('PropertyServiceController@index');
                } else {
                    throw new \Exception('Service Property cannot be saved!');
                }
            } catch (\Exception $e) {
                Session::flash('error', 'Oops, have one error...'.$e->getMessage());
                return redirect()->back()->withInput();
            }
        } else {
            Session::flash('error', env('ACCESS_DENIED_MSG'));
            return redirect()->back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PropertyService  $propertyService
     * @return \Illuminate\Http\Response                        
     */
    public function destroy(PropertyService $propertyService)
    {
        if (Auth::user()->canDeletepropertyService()) {
            try {
                $propertyService = PropertyService::find($propertyService->id);
                if ($propertyService->delete()) {
                    Session::flash('success', 'Service Property ID '.$propertyService->id.' successfull removed.');
                    
                    return redirect()->action('propertyServiceController@index');
                }
            } catch (\Exception $e) {
                Session::flash('error', 'Oops, have one error...'.$e->getMessage());
                return redirect()->action('PropertyServiceController@index');
            }
        } else {
            Session::flash('error', env('ACCESS_DENIED_MSG'));
            return redirect()->back();
        }
    }

    public function newPropertyService(Request $request) {
        $property = Property::find($request->id); 
        $property->is_required = $request->is_required;
        Session::push('service.properties', $property);        
        $serviceProperties = Session::get('service.properties');
        foreach($serviceProperties as $propertyService) {
            $assignedProperties[] = $propertyService->id;
        }


        $unassignedProperties = Property::select('*')->whereNotIn('id', $assignedProperties)->get();


        $response = [
            'property' => $property,
            'is_required' => $request->is_required,
            'property_options' => $request->property_options,
            'unassignedProperties' => $unassignedProperties,
        ];

        return response()->json($response);
    }

    public function removePropertyFromCurrentSession(Request $request) {
        $assignedProperties = [];
        $serviceProperties = Session::get('service.properties');
        Session::remove('service.properties');
        foreach($serviceProperties as $propertyService) {
            if (!$propertyService == $request->id) {
                $assignedProperties[] = $propertyService->id;   
            } else {
                $removedProperty = $request->id;
            }
        }
        Session::push('service.properties', $assignedProperties);



        return response()->json($removedProperty);
    }

    public function getpropertyServiceJson(Request $request) {
        $propertyService = DB::table('property_service')
                                ->select('property_service.*', 'services.*', 'properties.*')
                                ->join('services', 'services.id', 'property_service.service_id')
                                ->join('properties', 'properties.id', 'property_service.property_id')
                                ->get();

        //$serviceProperties = propertyService::where('service_id', $request->id)->get();

        return $serviceProperties;
    }
}
