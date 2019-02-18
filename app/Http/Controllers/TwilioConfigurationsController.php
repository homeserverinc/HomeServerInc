<?php

namespace App\Http\Controllers;

use App\SipDomain;
use App\TwilioWorkflow;
use App\TwilioWorkspace;
use App\TwilioConfiguration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeServerController;

class TwilioConfigurationsController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'config_name' => 'Configuration'
    ];

    protected $modelName = 'twilio_configuration';
    protected $recordName = 'config_name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) 
    {
        if (Auth::user()->canReadTwilioConfiguration()) {
            if ($request->searchField) {
                $twilioConfiguration = TwilioConfiguration::where('config_name', 'like', '%'.$request->searchField.'%')->paginate();
            } else {
                $twilioConfiguration = TwilioConfiguration::paginate();
            }

            return View('twilio_configuration.index', [
                'fields' => $this->fields,
                'twilioConfigurations' => $twilioConfiguration
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TwilioConfiguration  $twilioConfiguration
     * @return \Illuminate\Http\Response
     */
    public function edit(TwilioConfiguration $twilioConfiguration)
    {
        if (Auth::user()->canUpdateTwilioConfiguration()) {
            $sipDomains = SipDomain::all();
            $twilioWorkspaces = TwilioWorkspace::all();
            $twilioWorkflows = TwilioWorkflow::all();
            return View('twilio_configuration.edit', [
                'twilioConfiguration' => $twilioConfiguration,
                'sipDomains' => $sipDomains,
                'twilioWorkspaces' => $twilioWorkspaces,
                'twilioWorkflows' => $twilioWorkflows
            ]);            
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TwilioConfiguration  $twilioConfiguration
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TwilioConfiguration $twilioConfiguration)
    {
        if (Auth::user()->canUpdateTwilioConfiguration()) {
            try {
                $twilioConfiguration->fill($request->all());

                return $this->updateRecord($twilioConfiguration);
            } catch (\Exception $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }
}
