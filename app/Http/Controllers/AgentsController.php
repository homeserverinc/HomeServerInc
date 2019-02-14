<?php

namespace App\Http\Controllers;

use App\User;
use App\Agent;
use App\Language;
use App\AgentStatus;
use App\TwilioWorker;
use App\SipCredential;
use App\TwilioWorkspace;
use App\TwilioConfiguration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class AgentsController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'user_name' => 'User',
        'agent_status' => 'Status'
    ];

    protected $modelName = 'agent';
    protected $recordName = 'id';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadAgent()) {
            if ($request->searchField) {
                $agents = DB::table('agents')
                            ->select('agents.*', 'users.name as user_name', 'agent_statuses.agent_status')
                            ->join('users', 'agents.user_id', 'users.id')
                            ->join('agent_statuses', 'agents.agent_status_id', 'agent_statuses.id')
                            ->orWhere('users.name', 'like', '%'.$request->searchField.'%')
                            ->orderBy('agents.id', 'desc')
                            ->paginate();
            } else {
                $agents = DB::table('agents')
                            ->select('agents.*', 'users.name as user_name', 'agent_statuses.agent_status')
                            ->join('users', 'agents.user_id', 'users.id')
                            ->join('agent_statuses', 'agents.agent_status_id', 'agent_statuses.id')
                            ->orderBy('agents.id', 'desc')
                            ->paginate();
            }

            return View('agent.index', [
                'agents' => $agents,
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
        if (Auth::user()->canCreateAgent()) {    
            $users = User::doesnthave('agent')->get();
            $sipCredentials = SipCredential::doesntHave('agent')->get();
            $agent_statuses = AgentStatus::all();
            $languages = Language::all();
            $twilioWorkspaces = TwilioWorkspace::all();

            return View('agent.create', [
                'users' => $users,
                'agent_statuses' => $agent_statuses,
                'sipCredentials' => $sipCredentials,
                'languages' => $languages,
                'twilioWorkspaces' => $twilioWorkspaces
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
        if (Auth::user()->canCreateAgent()) {
            $this->validate($request, [
                'languages' => 'required',
                'user_id' => 'required',
                'sip_credential_id' => 'required',
                'twilio_workspace_id' => 'required',
            ]);

            try {

                DB::beginTransaction();

                /* get all agent data */
                $agent = new Agent($request->all());

                /* get the workspace */
                $workspace = TwilioWorkspace::find($request->twilio_workspace_id);

                /* get the user */
                $user = User::find($request->user_id);

                /* get all selected languages */
                $selected_languages = ($request->languages) ? $request->languages : array();
                $languages = Language::whereIn('id', $selected_languages)->get();

                /* get the sip credential */
                $sipCredential = SipCredential::find($request->sip_credential_id);

                /* get the default configurations of the twilio API */
                $twilioConfig = TwilioConfiguration::first();

                /* set the attributes to the worker */
                $sipDomain = explode('.', $twilioConfig->sip_domain->first()->domain_name);

                array_splice($sipDomain, 2, 0, 'us1');
                $domain = '';
                foreach ($sipDomain as $part) {
                    if (strlen($domain) > 0) {
                        $domain .= '.';
                    }
                    $domain .= $part;
                }            
                $attributes['contact_uri'] = 'sip:'.$sipCredential->username.'@'.$domain;

                $attributes['languages'] = array();

                foreach($languages as $language) {
                    $attributes['languages'][] = $language->acronym;
                }

                /* create the worker */
                $tw = (new TwilioApiController)->createTaskRouterWorker($workspace, $user, $attributes);

                $twilioWorker = TwilioWorker::create([
                       'sid' => $tw->sid,
                       'friendly_name' => $tw->friendlyName,
                       'attributes' => $tw->attributes,
                       'twilio_workspace_id' => $workspace->id
                ]);

                $agent->twilio_worker_id = $twilioWorker->id;

                $agent = $this->createRecord($agent, false);

                $agent->languages()->sync($languages);

                DB::commit();

                return $this->createSuccess($agent);

            } catch (\Exception $e) {
                
                DB::rollback();
                
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Agent  $agent
     * @return \Illuminate\Http\Response
     */
    public function edit(Agent $agent)
    {
        if (Auth::user()->canUpdateAgent()) {
            $users = User::whereDoesnthave('agent', function ($query) use ($agent) {
                $query->where('id', '!=', $agent->id);
            })->get();
            $sipCredentials = SipCredential::whereDoesntHave('agent', function ($query) use ($agent) {
                $query->where('id', '!=', $agent->id);
            })->get();
            $agent_statuses = AgentStatus::all();
            $languages = Language::all();
            $twilioWorkspaces = TwilioWorkspace::all();

            $assigned_languages = array();
            foreach ($agent->languages as $language) {
                $assigned_languages[] = $language->id;
            }

            return View('agent.edit', [
                'agent' => $agent,
                'users' => $users,
                'agent_statuses' => $agent_statuses,
                'sipCredentials' => $sipCredentials,
                'languages' => $languages,
                'twilioWorkspaces' => $twilioWorkspaces,
                'assignedLanguages' => $assigned_languages
            ]);
        } else {
            return $this->accessDenied();
        } 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Agent  $agent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Agent $agent)
    {
        if (Auth::user()->canUpdateAgent()) {
            $this->validate($request, [
                'languages' => 'required',
                'user_id' => 'required',
                'sip_credential_id' => 'required',
                'twilio_workspace_id' => 'required',
            ]);

            try {

                DB::beginTransaction();
                $agent->fill($request->all());

                /* get the workspace */
                $workspace = TwilioWorkspace::find($request->twilio_workspace_id);

                /* get the user */
                $user = User::find($request->user_id);

                /* get all selected languages */
                $selected_languages = ($request->languages) ? $request->languages : array();
                $languages = Language::whereIn('id', $selected_languages)->get();

                /* get the sip credential */
                $sipCredential = SipCredential::find($request->sip_credential_id);

                /* get the default configurations of the twilio API */
                $twilioConfig = TwilioConfiguration::first();

                /* set the attributes to the worker */
                $sipDomain = explode('.', $twilioConfig->sip_domain->first()->domain_name);

                array_splice($sipDomain, 2, 0, 'us1');
                $domain = '';
                foreach ($sipDomain as $part) {
                    if (strlen($domain) > 0) {
                        $domain .= '.';
                    }
                    $domain .= $part;
                }            
                $attributes['contact_uri'] = 'sip:'.$sipCredential->username.'@'.$domain;

                $attributes['languages'] = array();

                foreach($languages as $language) {
                    $attributes['languages'][] = $language->acronym;
                }

                $twilioWorker = $agent->twilio_worker;
                
                $twilioWorker->friendly_name = $user->name;
                
                /* update the worker */
                $tw = (new TwilioApiController)->updateTaskRouterWorker($workspace, $twilioWorker, $attributes);

                $twilioWorker = $this->updateRecord($twilioWorker, false);

                $agent = $this->updateRecord($agent, false);

                
                $agent->languages()->sync($languages);

                DB::commit();

                return $this->updateSuccess($agent);

            } catch (\Exception $e) {
                
                DB::rollback();
                
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Agent  $agent
     * @return \Illuminate\Http\Response
     */
    public function destroy(Agent $agent)
    {
        if (Auth::user()->canDeleteAgent()) {
            if ((new TwilioApiController)->deleteTaskRouterWorker(
                    $agent->twilio_workspace()->first(), 
                    $agent->twilio_worker()->first()
                )) {
                if ($agent->twilio_worker->delete()) {
                    return $this->deleteRecord($agent);
                } else {
                    throw new \Exception(__('messages.cant_delete', [
                        'model' => 'agent',
                        'name' => $agent->id
                    ]));
                }
            }
        } else {
            return $this->accessDenied();
        }
    }
 }
