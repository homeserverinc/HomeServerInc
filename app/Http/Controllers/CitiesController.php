<?php

namespace App\Http\Controllers;

use App\City;
use App\State;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class CitiesController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'city' => 'City',
        'state_name' => 'State'
    ];

    protected $modelName = 'city';
    protected $recordName = 'city';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) 
    {
        if (Auth::user()->canReadCity()) {
            if ($request->searchField) {
                $cities = DB::table('cities')
                            ->select('cities.*', 'states.state_name', 'states.state_code')
                            ->join('states', 'states.id', 'cities.state_id')
                            ->where('cities.city', 'like', '%'.$request->searchField.'%')
                            ->orWhere('state_code', '=', $request->searchField)
                            ->orWhere('states.state_name', 'like', '%'.$request->searchField.'%')
                            ->paginate();

            } else {
                $cities = DB::table('cities')
                            ->select('cities.*', 'states.state_name', 'states.state_code')
                            ->join('states', 'states.id', 'cities.state_id')
                            ->paginate();
            }

            return View('city.index', [
                'cities' => $cities,
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
        if (Auth::user()->canCreateCity()) {
            $states = State::all();

            return View('city.create', [
                'states' => $states
            ]);
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
        if (Auth::user()->canCreateCity()) {
            $this->validate($request, [
                'city' => 'required|unique:cities',
                'state_id' => 'required|numeric',
                'latitude' => 'required',
                'longitude' => 'required'
            ]);

            try {
                $city = new City($request->all());

                return $this->createRecord($city);
                
            } catch (\Exception $e) {
                $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function edit(City $city)
    {
        if (Auth::user()->canUpdateCity()) {

            $states = State::all();

            return View('city.edit', [
                'city' => $city,
                'states' => $states
            ]);
        } else {
            return $this->accessDenied();
        } 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, City $city)
    {
        if (Auth::user()->canUpdateCity()) {
            $this->validate($request, [
                'city' => 'required|unique:cities,id,'.$city->id,
                'state_id' => 'required|numeric',
                'latitude' => 'required',
                'longitude' => 'required'
            ]);
            try {
                $city->fill($request->all());

                return $this->updateRecord($city);
                
            } catch (\Exception $e) {
                $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function destroy(City $city)
    {
        if (Auth::user()->canDeleteCity()) {
            return $this->deleteRecord($city);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * getCitiesJson
     *
     * @param Request $request
     * @return void
     */
    public function getCitiesJson(Request $request) {
        $cities = City::where('state_id', $request->state_id)->orderBy('city', 'asc')->get();

        return response()->json($cities);
    }

    /**
     * getCitiesByStateId
     *
     * @param Request $request
     * @return void
     */
    public function getCitiesByStateId(Request $request) {   
        $state_id = City::find($request->id)->pluck('state_id');
        
        $cities = City::where('state_id', $state_id)->orderBy('city', 'asc')->get();
        //$city = City::with('state')->find($request->id);

        return $cities;
    }

}
