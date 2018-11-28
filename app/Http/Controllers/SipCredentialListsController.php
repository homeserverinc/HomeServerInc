<?php

namespace App\Http\Controllers;

use App\SipDomain;
use App\SipCredentialList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\TwilioApiController;
use App\Http\Controllers\HomeServerController;

class SipCredentialListsController extends HomeServerController
{

    public $fields = [
        'id' => 'ID',
        'friendly_name' => 'Name',
        'created_at' => ['label' => 'Created at', 'type' => 'datetime']
    ];

    protected $modelName = 'sip_credential_list';
    protected $recordName = 'friendly_name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadSipCredentialList()) {

            /* get sip credential lists from twilio */
            $this->getSipCredentialLists();

            if ($request->searchField) {
                $sipCredentialLists = SipCredentialList::where('friendly_name', 'like', '%'.$request->searchField.'%')
                                                    ->paginate();
            } else {
                $sipCredentialLists = SipCredentialList::paginate();
            }

            return View('sip_credential_list.index', [
                'fields' => $this->fields,
                'sip_credential_lists' => $sipCredentialLists
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
        if (Auth::user()->canCreateSipCredentialList()) {
            $sipDomains = SipDomain::all();
            return View('sip_credential_list.create', [
                'sipDomains' => $sipDomains
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
        if (Auth::user()->canCreateSipCredentialList()) {
            $this->validate($request, [
                'friendly_name' => 'required|string|min:5',
            ]);

            try {
                DB::beginTransaction();

                /* Create a new Sip Credential List using the Twilio API */
                $scl = (new TwilioApiController)->createSipCredentialList($request->friendly_name);            

                /* Throw a new exception in case of problems using the Twilio API */
                if (!$scl) {
                    throw new \Exception('Error on creating Sip Credential Lists at Twilio!');
                } 

                /* Persiste the new Sip Credential List at local Database */
                $sipCredentialList = new SipCredentialList($request->all());
                $sipCredentialList->sid = $scl->sid;
                $sipCredentialList->account_sid = env('TWILIO_ACCOUNT_SID');

                $sipCredentialList = $this->createRecord($sipCredentialList, false);

                /* Get a collection of Sip Domains by user selection */

                $sd = isset($request->sip_domains) ? $request->sip_domains : array();
                $sipDomains = SipDomain::whereIn('id', $sd)->get();
                $sipCredentialList->sip_domains()->sync($sipDomains);

                /* Initialize an empty array to store all Sip Domains that was successful create at Twilio API */
                $twilioSipDomains = array();

                /* Iterate over the Sip Domain Collection in order to create Sip Credential List Mappings with 
                   these domains */
                foreach($sipDomains as $sipDomain) {
                    $tsd = (new TwilioApiController)->createSipCredentialListMapping($sipCredentialList, $sipDomain);

                    /* If the Sip Credential List Mapping was successful create at Twilio API, persist on the local Database */
                    if ($tsd) {
                        $twilioSipDomains[] = $sipDomain->id;                         
                    }
                }

                return $this->createSuccess($sipCredentialList);

                DB::commit();
            } catch (\Exception  $e) {
                
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
     * @param  \App\SipCredentialList  $sipCredentialList
     * @return \Illuminate\Http\Response
     */
    public function edit(SipCredentialList $sipCredentialList)
    {
        if (Auth::user()->canUpdateSipCredentialList()) {
            $sipDomains = SipDomain::all();

            $assigned_sip_domains = array();
            foreach($sipCredentialList->sip_domains as $sip_domain) {
                $assigned_sip_domains[] = $sip_domain->id;
            }

            return View('sip_credential_list.edit', [
                'sip_credential_list' => $sipCredentialList,
                'sipDomains' => $sipDomains,
                'assigned_sip_domains' => $assigned_sip_domains
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SipCredentialList  $sipCredentialList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SipCredentialList $sipCredentialList)
    {
        if (Auth::user()->canCreateSipCredentialList()) {
            $this->validate($request, [
                'friendly_name' => 'required|string|min:5',
            ]);

            try {
                DB::beginTransaction();

                $sipCredentialList->fill($request->all());

                /* Just call to API Update method if the friendly_name was changed */
                if (SipCredentialList::find($sipCredentialList->id)->first()->friendly_name != $request->friendly_name) {
                    if (!(new TwilioApiController)->updateSipCredentialList($sipCredentialList)) {
                        throw new Exception('Error updating the Sip Credential List at Twilio...');
                    }   
                } 

                /* Persiste the updated Sip Credential List at local Database */
                $sipCredentialList = $this->updateRecord($sipCredentialList, false);

                /* Get a collection of Sip Domains currently assigned to the Sip Credential List */
                $assignedSipDomains = SipDomain::whereHas('sip_credential_lists', function($query) use ($sipCredentialList) {
                    $query->where('sip_credential_list_id', $sipCredentialList->id);
                })->pluck('id')->toArray();

                $selectedSipDomains = isset($request->sip_domains) ? $request->sip_domains : array();
                
                /* Mappings to remove from Twilio API */
                $rm = SipDomain::whereIn('id', array_diff($assignedSipDomains, $selectedSipDomains))->get();

                foreach($rm as $domain) {
                    (new TwilioApiController)->deleteSipCredentialListMapping($sipCredentialList, $domain); 
                }
                
                /* Mappings to add to twilio API */
                $am = SipDomain::whereIn('id', array_diff($selectedSipDomains, $assignedSipDomains))->get();
               
                foreach($am as $domain) {
                    (new TwilioApiController)->createSipCredentialListMapping($sipCredentialList, $domain); 
                }      

                $sipDomains = SipDomain::whereIn('id', $selectedSipDomains)->get();

                $sipCredentialList->sip_domains()->sync($sipDomains);

                return $this->updateSuccess($sipCredentialList);

                DB::commit();
            } catch (\Exception  $e) {
                
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
     * @param  \App\SipCredentialList  $sipCredentialList
     * @return \Illuminate\Http\Response
     */
    public function destroy(SipCredentialList $sipCredentialList)
    {
        if (Auth::user()->canDeleteSipCredentialList()){
            try {
                if ((new TwilioApiController)->deleteSipCredentialList($sipCredentialList)) {
                    return $this->deleteRecord($sipCredentialList);
                } else {
                    throw new \Exception('Error removing the Mapping from twilio.');
                }
            } catch (\Exception $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    public function getSipCredentialLists() {
        $sipCredentialLists = (new TwilioApiController)->getSipCredentialLists();
        foreach ($sipCredentialLists as $sipCredentialList) {
            if (SipCredentialList::where('sid', $sipCredentialList->sid)->count() == 0) {
                $this->storeSipCredentialListFromTwilio($sipCredentialList);
            }
        }
    }

    public function storeSipCredentialListFromTwilio($sipCredentialList) {
        $scl = new SipCredentialList();

        $scl->friendly_name = $sipCredentialList->friendlyName;
        $scl->sid = $sipCredentialList->sid;
        $scl->account_sid = $sipCredentialList->accountSid;
        
        if ($scl->save()) {
            return $scl;
        } else {
            throw new \Exception('Error on importing Sip Credential Lists from Twilio.');
        }
    }
}
