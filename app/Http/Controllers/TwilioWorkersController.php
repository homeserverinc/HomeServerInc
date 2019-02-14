<?php

namespace App\Http\Controllers;

use App\TwilioWorker;
use App\TwilioActivity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\TwilioApiController;
use App\Http\Controllers\HomeServerController;

class TwilioWorkersController extends HomeServerController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\TwilioWorker  $twilioWorker
     * @return \Illuminate\Http\Response
     */
    public function show(TwilioWorker $twilioWorker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TwilioWorker  $twilioWorker
     * @return \Illuminate\Http\Response
     */
    public function edit(TwilioWorker $twilioWorker)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TwilioWorker  $twilioWorker
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TwilioWorker $twilioWorker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TwilioWorker  $twilioWorker
     * @return \Illuminate\Http\Response
     */
    public function destroy(TwilioWorker $twilioWorker)
    {
        //
    }

    public function updateTwilioActivity(Request $request)
    {
        $twilioWorker = TwilioWorker::where('sid', $request->twilio_worker_sid)->first();
        $twilioWorkspace = $twilioWorker->twilio_workspace;
        $twilioActivity = TwilioActivity::find($request->twilio_activity_id);

        return (new TwilioApiController)->updateTaskRouterWorkerActivity(
                    $twilioWorkspace,
                    $twilioWorker,
                    $twilioActivity
        );
    }

    public function getCurrentTwilioActivity(Request $request) {
        $twilioWorker = TwilioWorker::where('sid', $request->twilio_worker_sid)->first();
        $twilioWorkspace = $twilioWorker->twilio_workspace;

        $result = (new TwilioApiController)->getTaskRouterWorkerCurrentActivity(
                    $twilioWorkspace,
                    $twilioWorker
                );

        Log::debug('getCurrentTwilioActivity: '.$result->activityName);
        switch ($result->activityName) {
            case 'Offline':
                $st = 0;
                break;
            case 'Idle':
                $st = 1;
                break;
            case 'Busy':
                $st = 2;
                break;
            case 'Reserved':
                $st = 3;
                break;
        }

        return $st;
    }

}
