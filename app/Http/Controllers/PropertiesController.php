<?php

namespace App\Http\Controllers;

use App\Property;
use App\Category;
use App\PropertyType;
use App\ServiceProperty;
use App\PropertyService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;

class PropertiesController extends Controller
{
    public $fields = [
        'id' => 'ID',
        'category' => 'Category',
        'property_label' => 'Label',
        'property_name' => 'Name',
        'property_type_description' => 'Type' 
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->searchField) {
            $properties = DB::table('properties')
                ->select('properties.*', 'property_types.property_type_description', 'categories.category')
                ->join('property_types', 'property_types.id', 'properties.property_type_id')
                ->join('categories', 'categories.id', 'properties.category_id')
                ->where('properties.property_name', 'like', '%'.$request->searchField.'%')
                ->orWhere('properties.property_label', 'like', '%'.$request->searchField.'%')
                ->orWhere('property_types.property_type_description', 'like', '%'.$request->searchField.'%')
                ->orderBy('properties.id', 'desc')
                ->paginate();
        } else {
            $properties = DB::table('properties')
                ->select('properties.*', 'property_types.property_type_description', 'categories.category')
                ->join('property_types', 'property_types.id', 'properties.property_type_id')
                ->join('categories', 'categories.id', 'properties.category_id')
                ->orderBy('properties.id', 'desc')
                ->paginate();
        }

        return View('property.index', [
            'properties' => $properties,
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
        $propertyTypes = PropertyType::all();
        $categories = Category::all();

        return View('property.create', [
            'propertyTypes' => $propertyTypes,
            'categories' => $categories
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
            'property_name' => 'required|string|unique:properties',
            'property_label' => 'required|string',
            'property_type_id' => 'required|numeric',
            'category_id' => 'required|numeric'
        ]);

        try {
            $property = new Property($request->all());

            if ($property->save()) {
                Session::flash('success', 'Property '.$request->property_label.' successfull created');
                return redirect()->action('PropertiesController@index');
            }
        } catch (\Exception $e) {
            Session::flash('error', 'Oops, have one error...'.$e->getMessage());
            return redirect()->back(Input::all());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function show(Property $property)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function edit(Property $property)
    {
        $propertyTypes = PropertyType::all();
        $categories = Category::all();

        $property = Property::find($property->id);

        return View('property.edit', [
            'propertyTypes' => $propertyTypes,
            'property' => $property,
            'categories' => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Property $property)
    {
        $this->validate($request, [
            'property_name' => 'required|string|unique:properties,id,'.$property->id,
            'property_label' => 'required|string',
            'property_type_id' => 'required|numeric',
            'category_id' => 'required|numeric'
        ]);

        try {
            $property = Property::find($property->id);
            $property->property_name = $request->property_name;
            $property->property_label = $request->property_label;
            $property->property_type_id = $request->property_type_id;
            $property->category_id = $request->category_id;

            if ($property->save()) {
                Session::flash('success', 'Property '.$request->property_label.' successfull updated');
                return redirect()->action('PropertiesController@index');
            }
        } catch (\Exception $e) {
            Session::flash('error', 'Oops, have one error...'.$e->getMessage());
            return redirect()->back(Input::all());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function destroy(Property $property)
    {
        if (Auth::user()->canDeleteProperty()) {
            try {
                $property = Property::find($property->id);
                if ($property->delete()) {
                    Session::flash('success', 'Property '.$property->property_label.' successfull removed.');
                    
                    return redirect()->action('PropertiesController@index');
                }
            } catch (\Exception $e) {
                switch ($e->getCode()) {
                    case 23000:
                        Session::flash('error', 'This property are in use, and can not be removed.');
                        return redirect()->action('PropertiesController@index');
                        break;
                    default:
                        Session::flash('error', 'Oops, have one error...'.$e->getMessage());
                        return redirect()->action('PropertiesController@index');
                        break;
                }
            }
        } else {
            Session::flash('error', env('ACCESS_DENIED_MSG'));
            return redirect()->back();
        }
    }

    public function getPropertiesJson(Request $request) {
        $assignedProperties = array();
        Log::info('aqui veio...');
        $propertyServices = PropertyService::select('property_id')->where('service_id', $request->id)->get();
        Log::debug($propertyServices);
        foreach ($propertyServices as $propertyService) {
            array_push($assignedProperties, $propertyService->property_id);
        }
        
        $properties = Property::select('properties.*')
                                    ->join('categories', 'categories.id', 'properties.category_id')
                                    ->join('services', 'services.category_id', 'categories.id')
                                    ->where('services.id', '=', $request->id)
                                    ->whereNotIn('properties.id', $assignedProperties)->get();

        return response()->json($properties);
                        
    }
}
