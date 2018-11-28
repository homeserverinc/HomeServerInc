<?php

namespace App\Http\Controllers;

use App\TwilioWorkflow;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class TwilioWorkflowsController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'friendly_name' => 'Workflow',
        'sid' => 'SID'
    ];

    protected $modelName = 'twilio_workflow';
    protected $recordName = 'friendly_name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadTwilioWorkflow()) {
            if ($request->searchField) {
                $twilioWorkflows = TwilioWorkflow::where('friendly_name', 'like', '%'.$request->searchField.'%')->paginate();
            } else {
                $twilioWorkflows = TwilioWorkflow::paginate();
            }

            return View('twilio_workflow.index', [
                'fields' => $this->fields,
                'twilioWorkflows' => $twilioWorkflows
            ]);

        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TwilioWorkflow  $twilioWorkflow
     * @return \Illuminate\Http\Response
     */
    public function edit(TwilioWorkflow $twilioWorkflow)
    {
        if (Auth::user()->canUpdateTwilioWorkflow()) {

        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TwilioWorkflow  $twilioWorkflow
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TwilioWorkflow $twilioWorkflow)
    {
        if (Auth::user()->canUpdateTwilioWorkflow()) {

        } else {
            return $this->accessDenied();
        }
    }

    public function importWorkflowsFromTwilio() {
        if (Auth::user()->canAccessTwilioImportWorkflows()) {
            try {
                $workspaces = (new TwilioApiController)->getTaskRouterWorkflows();
                
                DB::beginTransaction();
                
                foreach ($workspaces as $workflows) {
                    foreach ($workflows as $workflow) {
                        TwilioWorkflow::updateOrCreate(
                            [
                                'sid' => $workflow->sid
                            ],
                            [
                                'friendly_name' => $workflow->friendlyName,
                                'account_sid' => $workflow->accountSid,
                                'workspace_sid' => $workflow->workspaceSid
                            ]
                        );
                    }
                }

                DB::commit();

                Session::flash('success', __('messages.import_taskrouter_workflows'));
                return redirect()->action('TwilioWorkflowsController@index');
            } catch (\Exception $e) {
                
                DB::rollback();
                
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }
}
