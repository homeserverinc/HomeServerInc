<?php

namespace App\Http\Controllers;

use App\FilteredLead;
use Illuminate\Http\Request;
use App\Http\Controllers\HomeServerController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;

class FilteredLeadsController extends HomeServerController
{
    public $fields = [
        'lead.customer.first_name' => 'Name',
        'lead.customer.phone1' => 'Phone',
        'reason' => 'Reason',
        'created_at' => 'Created',
    ];

    protected $modelName = 'filtered_lead';
    protected $recordName = 'uuid';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadFilteredLead()) {
            /* if (Auth::user()->canReadContractor()) { */
                if ($request->searchField) {
                    $leads = FilteredLead::where('reason', 'like', '%'.$request->searchField.'%')
                    ->where('accepted', '=', 0)
                    ->orderBy('created_at', 'desc')
                    ->paginate();
                } else {
                    $leads = FilteredLead::orderBy('created_at', 'desc')->where('accepted', '=', 0)
                    ->paginate();
                }
            /* } else {
                return $this->accessDenied();
            } */
            return View('filtered_leads.index', ['filtered_leads' => $leads,'fields' => $this->fields]);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\FilteredLead  $filteredLead
     * @return \Illuminate\Http\Response
     */
    public function show(FilteredLead $filteredLead)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\FilteredLead  $filteredLead
     * @return \Illuminate\Http\Response
     */
    public function edit(FilteredLead $filteredLead)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\FilteredLead  $filteredLead
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FilteredLead $filteredLead)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FilteredLead  $filteredLead
     * @return \Illuminate\Http\Response
     */
    public function destroy(FilteredLead $filteredLead)
    {
        //
    }
}
