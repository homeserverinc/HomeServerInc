<?php

namespace App\Http\Controllers;

use App\SipDomain;
use App\SipCredentialList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\SipCredentialListSipDomain;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class SipCredentialListSipDomainsController extends Controller
{
    public $fields = [
        'id' => 'ID',
        'domain_name' => 'Domain',
        'credential_list_name' => 'Credential List'
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canListSipCredentialListSipDomain()) {
            if ($request->searchField) {
                $sipCredentialListSipDomains = DB::table('sip_credential_list_sip_domain')
                                                ->select(
                                                    'sip_credential_list_sip_domain.id',
                                                    'sip_domains.friendly_name as domain_name',
                                                    'sip_credential_lists.friendly_name as credential_list_name'
                                                )
                                                ->join(
                                                    'sip_credential_lists', 
                                                    'sip_credential_lists.id', 
                                                    'sip_credential_list_sip_domain.sip_credential_list_id'
                                                )
                                                ->join(
                                                    'sip_domains',
                                                    'sip_domains.id',
                                                    'sip_credential_list_sip_domain.sip_domain_id'
                                                )
                                                ->where(
                                                    'sip_domains.friendly_name',
                                                    'like',
                                                    '%'.$request->searchField.'%'
                                                )
                                                ->orWhere(
                                                    'sip_credential_lists.friendly_name',
                                                    'like',
                                                    '%'.$request->searchField.'%'
                                                )
                                                ->orderBy('sip_domains.id')
                                                ->paginate();
            } else {
                $sipCredentialListSipDomains = DB::table('sip_credential_list_sip_domain')
                                                ->select(
                                                    'sip_credential_list_sip_domain.id',
                                                    'sip_domains.friendly_name as domain_name',
                                                    'sip_credential_lists.friendly_name as credential_list_name'
                                                )
                                                ->join(
                                                    'sip_credential_lists', 
                                                    'sip_credential_lists.id', 
                                                    'sip_credential_list_sip_domain.sip_credential_list_id'
                                                )
                                                ->join(
                                                    'sip_domains',
                                                    'sip_domains.id',
                                                    'sip_credential_list_sip_domain.sip_domain_id'
                                                )
                                                ->orderBy('sip_domains.id')
                                                ->paginate();
            }

            return View('sip_credential_list_sip_domain.index', [
                'fields' => $this->fields,
                'sipCredentialListSipDomains' => $sipCredentialListSipDomains
            ]);
        } else {
            Session::flash('error', env('ACCESS_DENIED_MSG'));
            return redirect()->back();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateSipCredentialListSipDomain()) {
            $sipDomains = SipDomain::all();
            $sipCredentialLists = SipCredentialList::all();
            
            return View('sip_credential_list_sip_domain.create', [
                'sipDomains' => $sipDomains,
                'sipCredentialLists' => $sipCredentialLists
            ]);
        } else {
            Session::flash('error', env('ACCESS_DENIED_MSG'));
            return redirect()->back();
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
        if (Auth::user()->canCreateSipCredentialListSipDomain()) {
            $this->validate($request, [
                'sip_domain_id' => 'required|numeric',
                'sip_credential_list_id' => 'required|numeric'
            ]);
    
            try {
                $sipCredentialListSipDomain = new SipCredentialListSipDomain($request->all());
    
                $sipDomain = SipDomain::find($request->sip_domain_id);
                $sipCredentialList = SipCredentialList::find($request->sip_credential_list_id);
                
                $scm = (new TwilioApiController)->createSipCredentialMapping($sipCredentialList, $sipDomain);

                if (!$scm) {
                    throw new \Exception('Error on creating Sip Credential Mapping at Twilio!');
                } else {
                    $sipCredentialListSipDomain->sid = $scm->sid;
                    
                    if ($sipCredentialListSipDomain->save()) {
                        Session::flash('success', 'Sip Credential List vs Sip Domain successfull created');
                        return redirect()->action('SipCredentialListSipDomainController@index');
                    } else {
                        throw new \Exception('The sip credential list vs sip domain can not be saved!');
                    }
                }
            } catch (\Exception  $e) {
                Session::flash('error', 'Oops, have one error... '.$e->getMessage());
                return redirect()->back()->withInput();
            }
        } else {
            Session::flash('error', env('ACCESS_DENIED_MSG'));
            return redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SipCredentialListSipDomain  $sipCredentialListSipDomain
     * @return \Illuminate\Http\Response
     */
    public function show(SipCredentialListSipDomain $sipCredentialListSipDomain)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SipCredentialListSipDomain  $sipCredentialListSipDomain
     * @return \Illuminate\Http\Response
     */
    public function edit(SipCredentialListSipDomain $sipCredentialListSipDomain)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SipCredentialListSipDomain  $sipCredentialListSipDomain
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SipCredentialListSipDomain $sipCredentialListSipDomain)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SipCredentialListSipDomain  $sipCredentialListSipDomain
     * @return \Illuminate\Http\Response
     */
    public function destroy(SipCredentialListSipDomain $sipCredentialListSipDomain)
    {
        if (Auth::user()->canDeleteSipCredentialListSipDomain()){
            if ((new TwilioApiController)->deleteSipCredentialListMapping($sipCredentialListSipDomain)) {
                if ($sipCredentialListSipDomain->delete()) {
                    Session::flash('success', 'Sip Credential List vs Sip Domain successfull removed.');
                    
                    return redirect()->action('SipCredentialListSipDomainsController@index');
                }
            }
        }
    }
}
