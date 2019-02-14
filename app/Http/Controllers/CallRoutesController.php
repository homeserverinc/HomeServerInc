<?php

namespace App\Http\Controllers;

use App\Phone;
use App\CallRoute;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class CallRoutesController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'description' => 'Description',
        'phone_number' => 'Phone Number',
        'to_destination' => [
            'label' => 'Sends to',
            'type' => 'list',
            'values' => [
                'Agents',
                'VoiceMessage',
                'Phone'
            ]
        ],
        'priority' => 'Priority',
        'active' => [
            'label' => 'Active',
            'type' => 'bool'
        ]
    ];

    protected $modelName = 'call_route';
    protected $recordName = 'description';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadCallRoute()) {
            if ($request->searchField) {
                $callroutes = DB::table('call_routes')
                                ->select('call_routes.*', 'phones.phone_number')
                                ->join('phones', 'phones.id', 'call_routes.phone_id')
                                ->where('call_routes.description', 'like', '%'.$request->searchField.'%')
                                ->orWhere('phones.phone_number', 'like', '%'.$request->searchField.'%')
                                ->orderBy('call_routes.priority', 'desc')
                                ->orderBy('phones.id', 'desc')
                                ->orderBy('call_routes.id', 'desc')
                                ->paginate();
            } else {
                $callroutes = DB::table('call_routes')
                                ->select('call_routes.*', 'phones.phone_number')
                                ->join('phones', 'phones.id', 'call_routes.phone_id')
                                ->orderBy('call_routes.priority', 'desc')
                                /* ->orderBy('phones.id', 'desc')
                                ->orderBy('call_routes.id', 'desc') */
                                ->paginate();
            }

            return View('callroute.index', [
                'callroutes' => $callroutes,
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
        if (Auth::user()->canCreateCallRoute()) {
            $phones = Phone::all();
            
            return View('callroute.create', [
                'phones' => $phones
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
        if (Auth::user()->canCreateCallroute()) {
            $this->validate($request, [
                'description' => 'string|required|min:5|max:100|unique:call_routes',
                'phone_id' => 'numeric|required',
                'to_destination' => 'numeric|required',
                'destination_value' => 'required_if:to_destination,==,2',
                'priority' => 'numeric|required'
            ]);

            try {
                $callroute = new CallRoute($request->all());

                return $this->createRecord($callroute);
            } catch (\Exception $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CallRoute  $callRoute
     * @return \Illuminate\Http\Response
     */
    public function edit(CallRoute $callroute)
    {
        if (Auth::user()->canUpdateCallRoute()) {
            $phones = Phone::all();

            return View('callroute.edit', [
                'phones' => $phones,
                'callRoute' => $callRoute
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CallRoute  $callRoute
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CallRoute $callroute)
    {
        if (Auth::user()->canUpdateCallroute()) {
            $this->validate($request, [
                'description' => 'string|required|min:5|max:100|unique:call_routes,id,'.$callroute->id,
                'phone_id' => 'numeric|required',
                'to_destination' => 'numeric|required',
                'destination_value' => 'required_if:to_destination,==,2',
                'priority' => 'numeric|required'
            ]);

            try {
                $callRoute->fill($request->all());
 
                return $this->updateRecord($callRoute);
            } catch (\Exception $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CallRoute  $callRoute
     * @return \Illuminate\Http\Response
     */
    public function destroy(CallRoute $callroute)
    {
        if (Auth::user()->canDeleteCallroute()) {
            return $this->deleteRecord($callroute);
        } else {
            return $this->accessDenied();
        }
    }

    public function getRoutesToPhone($phoneNumber) {
        $callroutes = DB::table('call_routes')
                        ->join('phones', 'phones.id', 'call_routes.phone_id')
                        ->where('phones.phone_number', '=', $phoneNumber)
                        ->where('call_routes.active', true)
                        ->orderBy('call_routes.priority', 'desc')
                        ->get();

        dd($callroutes);
    }
}
