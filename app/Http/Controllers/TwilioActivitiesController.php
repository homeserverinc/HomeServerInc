<?php

namespace App\Http\Controllers;

use App\TwilioActivity;
use App\TwilioWorkspace;
use App\TwilioConfiguration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class TwilioActivitiesController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'activity_friendly_name' => 'Friendly Name',
        'workspace_friendly_name' => 'Workspace',
        'available' => ['label' => 'Available', 'type' => 'bool']
    ];

    protected $modelName = 'twilio_activity';
    protected $recordName = 'friendly_name';
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadTwilioActivity()) {
            if ($request->searchField) {
                $twilioActivities = DB::table('twilio_activities')
                                    ->select(
                                        'twilio_activities.id', 
                                        'twilio_activities.sid', 
                                        'twilio_activities.friendly_name as activity_friendly_name',
                                        'twilio_activities.available',
                                        'twilio_workspaces.friendly_name as workspace_friendly_name')
                                    ->join('twilio_workspaces', 'twilio_activities.twilio_workspace_id', 'twilio_workspaces.id')
                                    ->where('twilio_activities.friendly_name', 'like', '%'.$request->searchField.'%')
                                    ->orWhere('twilio_workspaces.friendly_name', 'like', '%'.$request->searchField.'%')
                                    ->paginate();
            } else {
                $twilioActivities = DB::table('twilio_activities')
                                    ->select(
                                        'twilio_activities.id', 
                                        'twilio_activities.sid', 
                                        'twilio_activities.friendly_name as activity_friendly_name',
                                        'twilio_activities.available',
                                        'twilio_workspaces.friendly_name as workspace_friendly_name')
                                    ->join('twilio_workspaces', 'twilio_activities.twilio_workspace_id', 'twilio_workspaces.id')
                                    ->paginate();
            }

            return View('twilio_activity.index', [
                'fields' => $this->fields,
                'twilio_activities' => $twilioActivities
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TwilioActivity  $twilioActivity
     * @return \Illuminate\Http\Response
     */
    public function edit(TwilioActivity $twilioActivity)
    {
        if (Auth::user()->canUpdateTwilioActivity()) {
            $twilioWorkspaces = TwilioWorkspace::all();

            return View('twilio_activity.edit', [
                'twilioActivity' => $twilioActivity,
                'twilioWorkspaces' => $twilioWorkspaces
            ]);
        } else {
            return $this->accessDenied();
        } 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TwilioActivity  $twilioActivity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TwilioActivity $twilioActivity)
    {
        if (Auth::user()->canUpdateTwilioActivity()) {
            $this->validate($request, [
                'sid' => 'required|string',
                'friendly_name' => 'required|string',
                'twilio_workspace_id' => 'required|numeric'
            ]);

            try {
                $twilioActivity->fill($request->all());

                return $this->updateRecord($twilioActivity);
            } catch (\Exception $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    public function importActivitiesFromTwilio() {
        if (Auth::user()->canAccessTwilioImportActivities()) {
            try {
                $twilioConfiguration = TwilioConfiguration::with('twilio_workspace')->first();
                $twilioActivities = (new TwilioApiController)->getTwilioActivities($twilioConfiguration->twilio_workspace);
                
                DB::beginTransaction();
                
                foreach ($twilioActivities as $twilioActivity) {
                    TwilioActivity::updateOrCreate(
                        [
                            'sid' => $twilioActivity->sid
                        ],
                        [
                            'friendly_name' => $twilioActivity->friendlyName,
                            'available' => $twilioActivity->available,
                            'twilio_workspace_id' => $twilioConfiguration->twilio_workspace->id
                        ]
                    );
                }

                DB::commit();

                Session::flash('success', __('messages.import_twilio_activities'));
                return redirect()->action('TwilioActivitiesController@index');
            } catch (\Exception $e) {
                
                DB::rollback();
                
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }
}
