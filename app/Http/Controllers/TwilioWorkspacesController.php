<?php

namespace App\Http\Controllers;

use App\TwilioWorkspace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class TwilioWorkspacesController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'friendly_name' => 'Friendly Name'
    ];

    protected $modelName = 'twilio_workspace';
    protected $recordName = 'friendly_name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) 
    {
        if (Auth::user()->canReadTwilioWorkspace()) {
            if ($request->searchField) {
                $twilioWorkspaces = DB::table('twilio_workspaces')
                                    ->where('friendly_name', 'like', '%'.$request->searchField.'%')
                                    ->paginate();
            } else {
                $twilioWorkspaces = TwilioWorkspace::paginate();
            }

            return View('twilio_workspace.index', [
                'fields' => $this->fields,
                'twilio_workspaces' => $twilioWorkspaces
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
        if (Auth::user()->canCreateTwilioWorkspace()) {
            return View('twilio_workspace.create');
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
        if (Auth::user()->canCreateTwilioWorkspace()) {
            $this->validate($request, [
                'friendly_name' => 'required|string',
                'sid' => 'required|string'
            ]);

            try {
                $twilioWorkspace = new TwilioWorkspace($request->all());
                $twilioWorkspace->account_sid = env('TWILIO_ACCOUNT_SID');
                
                return $this->createRecord($twilioWorkspace);
            } catch (\Exception  $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TwilioWorkspace  $twilioWorkspace
     * @return \Illuminate\Http\Response
     */
    public function edit(TwilioWorkspace $twilioWorkspace)
    {
        if (Auth::user()->canUpdateTwilioWorkspace()) {
            return View('twilio_workspace.edit', [
                'twilioWorkspace' => $twilioWorkspace
            ]);
        } else {
            return $this->accessDenied();
        } 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TwilioWorkspace  $twilioWorkspace
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TwilioWorkspace $twilioWorkspace)
    {
        if (Auth::user()->canUpdateTwilioWorkspace()) {
            $this->validate($request, [
                'friendly_name' => 'required|string',
                'sid' => 'required|string'
            ]);

            try {
                $twilioWorkspace->fill($request->all());
                $twilioWorkspace->account_sid = env('TWILIO_ACCOUNT_SID');
                
                return $this->updateRecord($twilioWorkspace);                    
            } catch (\Exception  $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TwilioWorkspace  $twilioWorkspace
     * @return \Illuminate\Http\Response
     */
    public function destroy(TwilioWorkspace $twilioWorkspace)
    {
        if (Auth::user()->canDeleteTwilioWorkspace()) {
            return $this->deleteRecord($twilioWorkspace);
        } else {
            return $this->accessDenied();
        }
    }

    public function importWorkspacesFromTwilio() {
        if (Auth::user()->canAccessTwilioImportWorkspaces()) {
            try {
                $workspaces = (new TwilioApiController)->getTaskRouterWorkspaces();
                
                DB::beginTransaction();
                
                foreach ($workspaces as $workspace) {
                    TwilioWorkspace::updateOrCreate(
                        [
                            'sid' => $workspace->sid
                        ],
                        [
                            'account_sid' => $workspace->accountSid,
                            'friendly_name' => $workspace->friendlyName
                        ]
                    );
                }

                DB::commit();

                Session::flash('success', __('messages.import_taskrouter_workspaces'));
                return redirect()->action('TwilioWorkspacesController@index');
            } catch (\Exception $e) {
                
                DB::rollback();
                
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }
}
