<?php

namespace App\Http\Controllers;

use App\SiteContact;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use App\Events\NewSiteContact;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\HomeServerController;
use App\Http\Controllers\SiteContactsController;

class SiteContactsController extends HomeServerController
{
    use ApiResponse;

    public $fields = [
        'uuid' => 'UUID',
        'site_name' => 'Site',
        'name' => 'Name',
        'created_at' => 'Date',
        'contacted' => [
            'label' => 'Contacted',
            'type' => 'bool'
        ],
        'contact_date' => 'Date contacted'
    ];

    public $modelName = 'site_contact';
    public $recordName = 'uuid';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadSiteContact()) {
            if ($request->searchField) {
                $siteContacts = DB::table('site_contacts')
                    ->select('site_contacts.*', 'sites.name as site_name')
                    ->join('sites', 'sites.uuid', 'site_contacts.site_uuid')
                    ->where('sites.name', 'like', '%'.$searchField.'%')
                    ->orderBy('created_at', 'desc')
                    ->paginate();
            } else {
                $siteContacts = DB::table('site_contacts')
                    ->select('site_contacts.*', 'sites.name as site_name')
                    ->join('sites', 'sites.uuid', 'site_contacts.site_uuid')
                    ->orderBy('created_at', 'desc')
                    ->paginate();
            }
        } else {
            return $this->accessDenied();
        }

        return View('site_contact.index', [
            'fields' => $this->fields,
            'site_contacts' => $siteContacts
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3',
            'phone' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->getApiResponse($validator, 'fail', $request->all());
        }
       
        try {            
            $siteContact = new SiteContact($request->all());

            $siteContact->save();

            /* send an SMS */
            event(new NewSiteContact($siteContact, env('SMS_TO_NUMBER')));

            return $this->getApiResponse($siteContact);
        } catch (\Exception $e) {
            return $this->getApiResponse($e->getMessage(), 'error', $request->all());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SiteContact  $siteContact
     * @return \Illuminate\Http\Response
     */
    public function edit(SiteContact $siteContact)
    {
        if (Auth::user()->canUpdateSiteContact()) {
            return View('site_contact.edit', [
                'siteContact' => $siteContact
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SiteContact  $siteContact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SiteContact $siteContact)
    {
        //
    }
}
