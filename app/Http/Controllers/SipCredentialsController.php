<?php

namespace App\Http\Controllers;

use App\SipCredential;
use App\SipCredentialList;
use Illuminate\Http\Request;
use App\Rules\PasswordStrength;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\TwilioApiController;
use App\Http\Controllers\HomeServerController;

class SipCredentialsController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'friendly_name' => 'Credential List',
        'username' => 'Credential',
        'created_at' => [
            'label' => 'Created at',
            'type' => 'datetime'
        ]
    ];

    protected $modelName = 'sip_credential';
    protected $recordName = 'username';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadSipCredential()) {
            if ($request->searchField) {
                $sipCredentials = SipCredential::select('sip_credentials.*', 'sip_credential_lists.friendly_name')
                ->join('sip_credential_lists', 'sip_credentials.sip_credential_list_id', 'sip_credential_lists.id')
                ->where('sip_credential_lists.friendly_name', 'like', '%'.$request->searchField.'%')
                ->orWhere('sip_credentials.username', 'like', '%'.$request->searchField.'%')
                ->paginate();
            } else {
                $sipCredentials = SipCredential::select('sip_credentials.*', 'sip_credential_lists.friendly_name')
                ->join('sip_credential_lists', 'sip_credentials.sip_credential_list_id', 'sip_credential_lists.id')
                ->paginate();
            }

            return View('sip_credential.index', [
                'fields' => $this->fields,
                'sip_credentials' => $sipCredentials
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
        if (Auth::user()->canCreateSipCredential()) {
            $sipCredentialLists = SipCredentialList::all();
            
            return View('sip_credential.create', [
                'sip_credential_lists' => $sipCredentialLists
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
        if (Auth::user()->canCreateSipCredential()) {
            /* $this->validate($request, [
                'friendly_name' => 'required|string|min:5',
            ]); */
    
            try {
                $sipCredentialList = SipCredentialList::find($request->sip_credential_list_id);

                $sipCredential = new SipCredential($request->all());
                $sipCredential->password = $request->password;
                $sipCredential->account_sid = env('TWILIO_ACCOUNT_SID');

                $sc = (new TwilioApiController)->createSipCredential($sipCredentialList, $sipCredential);

                if (!$sc) {
                    throw new \Exception('Error on creating Sip Credential at Twilio!');
                } else {
                    $sipCredential->sid = $sc->sid;
    
                    return $this->createRecord($sipCredential);                 
                }
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
     * @param  \App\SipCredential  $sipCredential
     * @return \Illuminate\Http\Response
     */
    public function edit(SipCredential $sipCredential)
    {
        if (Auth::user()->canUpdateSipCredential()) {
            $sipCredentialLists = SipCredentialList::all();
            
            return View('sip_credential.edit', [
                'sipCredential' => $sipCredential,
                'sip_credential_lists' => $sipCredentialLists
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SipCredential  $sipCredential
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SipCredential $sipCredential)
    {
        if (Auth::user()->canUpdateSipCredential()) {
            $this->validate($request, [
                'password' => ['present', 'min:12', new PasswordStrength] 
            ]);

            try {
                $sipCredential->fill($request->all());
                
                DB::beginTransaction();
                
                $sipCredential = $this->updateRecord($sipCredential, false);

                if ((new TwilioApiController)->updateSipCredential($sipCredential->sip_credential_list()->first(), $sipCredential)) {
                    DB::commit();
                    return $this->updateSuccess($sipCredential);
                } else {
                    throw new \Exception('Error updating Sip Credential at Twilio API');
                }
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
     * @param  \App\SipCredential  $sipCredential
     * @return \Illuminate\Http\Response
     */
    public function destroy(SipCredential $sipCredential)
    {
        if (Auth::user()->canDeleteSipCredential()){
            if ((new TwilioApiController)->deleteSipCredential($sipCredential)) {
                return $this->deleteRecord($sipCredential);
            } else {
                throw new \Exception('Error deleting Sip Credential from Twilio');
            }
        } else {
            return $this->accessDenied();
        }
    }
}
