<?php

namespace App\Http\Controllers;

use App\MissedCall;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeServerController;

class MissedCallsController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'from' => 'From',
        'to' => 'To',
        'language' => 'Language',
        'datetime_call' => ['label' => 'On', 'type' => 'datetime']
    ];

    protected $modelName = 'missed_call';
    protected $recordName = 'id';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadMissedCall()) {
            $agent = Auth::user()->agent;
            $agent = $agent ? $agent->id : null;

            if ($request->searchField) {
                $missedCalls = DB::table('missed_calls')
                                    ->select('missed_calls.*', 'sites.name as to', 'languages.language')
                                    ->join('sites', 'sites.uuid', 'missed_calls.site_uui')
                                    ->join('languages', 'languages.id', 'missed_calls.language_id')
                                    ->where(function($query) use ($agent) {
                                        $query->where('agent_id', $agent)
                                              ->orWhereNull('agent_id');
                                    })
                                    ->where('missed_calls.from', 'like', '%'.$request->searchField.'%')
                                    ->orWhere('sites.name', 'like', '%'.$request->searchField.'%')
                                    ->orderBy('id', 'desc')
                                    ->paginate();
            } else {
                $missedCalls = DB::table('missed_calls')
                                    ->select('missed_calls.*', 'sites.name as to', 'languages.language')
                                    ->join('sites', 'sites.uuid', 'missed_calls.site_uuid')
                                    ->join('languages', 'languages.id', 'missed_calls.language_id')
                                    ->where(function($query) use ($agent) {
                                        $query->where('agent_id', $agent)
                                              ->orWhereNull('agent_id');
                                    })
                                    ->orderBy('id', 'desc')
                                    ->paginate();
            }

            return View('missed_call.index', [
                'fields' => $this->fields,
                'missedCalls' => $missedCalls
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\MissedCall  $missedCall
     * @return \Illuminate\Http\Response
     */
    public function show(MissedCall $missedCall)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\MissedCall  $missedCall
     * @return \Illuminate\Http\Response
     */
    public function edit(MissedCall $missedCall)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\MissedCall  $missedCall
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MissedCall $missedCall)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MissedCall  $missedCall
     * @return \Illuminate\Http\Response
     */
    public function destroy(MissedCall $missedCall)
    {
        //
    }
}
