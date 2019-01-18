<?php

namespace App\Http\Controllers;

use App\SiteContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\HomeServerController;

class SiteContactsController extends HomeServerController
{
    public $fields = [
        'uuid' => 'UUID',
        'site_name' => 'Site',
        'name' => 'Name',
        'contacted' => 'Contacted',
        'contact_date' => 'Date'
    ];

    public $modelName = 'site_contact';
    public $recordName = 'uuid';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->all()) {
            try {
                
                DB::beginTransaction();
                
                $siteContact = new SiteContact($request->all());

                $siteContact->save();
                DB::commit();

                return response()->json($siteContact);
            } catch (\Exception $e) {
                
                DB::rollback();
                return response()->json($e);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SiteContact  $siteContact
     * @return \Illuminate\Http\Response
     */
    public function show(SiteContact $siteContact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SiteContact  $siteContact
     * @return \Illuminate\Http\Response
     */
    public function edit(SiteContact $siteContact)
    {
        //
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SiteContact  $siteContact
     * @return \Illuminate\Http\Response
     */
    public function destroy(SiteContact $siteContact)
    {
        //
    }
}
