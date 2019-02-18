<?php

namespace App\Http\Controllers;

use App\SipDomain;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\TwilioApiController;
use App\Http\Controllers\HomeServerController;

class SipDomainsController extends HomeServerController
{

    public $fields = [
        'id' => 'ID',
        'friendly_name' => 'Name',
        'domain_name' => 'Domain',
        'sip_registration' => [
            'label' => 'Allow Sip Registration',
            'type' => 'bool'
        ]
    ];

    protected $modelName = 'sip_domain';
    protected $recordName = 'friendly_name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadSipDomain()) {
            //get all domains from twilio account that have not yet been created here
            $this->getTwilioSipDomains();

            if ($request->searchField) {
                $sip_domains = SipDomain::where('friendly_name', 'like', '%'.$request->searchField.'%')
                                        ->orWhere('domain_name', 'like', '%'.$request->searchField.'%')
                                        ->paginate();
            } else {
                $sip_domains = SipDomain::paginate();
            }

            return View('sip_domain.index', [
                'fields' => $this->fields,
                'sip_domains' => $sip_domains
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
        if (Auth::user()->canCreateSipDomain()) {
            
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SipDomain  $sipDomain
     * @return \Illuminate\Http\Response
     */
    public function show(SipDomain $sipDomain)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SipDomain  $sipDomain
     * @return \Illuminate\Http\Response
     */
    public function edit(SipDomain $sipDomain)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SipDomain  $sipDomain
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SipDomain $sipDomain)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SipDomain  $sipDomain
     * @return \Illuminate\Http\Response
     */
    public function destroy(SipDomain $sipDomain)
    {
        if (Auth::user()->canDeleteSipDomain()) {
            return $this->deleteRecord($sipDomain);
        } else {
            return $this->accessDenied();
        }
    }

    protected function getTwilioSipDomains() {
        $sip_domains = (new TwilioApiController)->getSipDomains();

        foreach($sip_domains as $sip_domain) {
            if (SipDomain::where('sid', $sip_domain->sid)->count() == 0) {
                $this->storeSipDomaindFromTwilio($sip_domain);
            }
        }
    }

    protected function storeSipDomaindFromTwilio($sipDomain) {
        $sip_domain = new SipDomain;

        $sip_domain->sid = $sipDomain->sid;
        $sip_domain->friendly_name = $sipDomain->friendlyName;
        $sip_domain->account_sid = $sipDomain->accountSid;
        $sip_domain->api_version = $sipDomain->apiVersion;
        $sip_domain->domain_name = $sipDomain->domainName;
        $sip_domain->auth_type = $sipDomain->authType;
        $sip_domain->voice_url = $sipDomain->voiceUrl;
        $sip_domain->voice_method = $sipDomain->voiceMethod;
        $sip_domain->voice_fallback_url = $sipDomain->voiceFallbackUrl;
        $sip_domain->voice_fallback_method = $sipDomain->voiceFallbackMethod;
        $sip_domain->voice_status_callback_url = $sipDomain->voiceStatusCallbackUrl;
        $sip_domain->voice_status_callback_method = $sipDomain->voiceStatusCallbackMethod;
        $sip_domain->sip_registration = $sipDomain->sipRegistration;

        $sip_domain->save();
    }
}
