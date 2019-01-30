<?php

namespace App\Http\Controllers;

use App\Contractor;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\HomeServerController;

class ContractorsController extends HomeServerController
{
    use ApiResponse;

    public $fields = [
        'uuid' => 'UUID',
        'name' => 'Name',
        'company' => 'Company',
        'created_at' => 'Created',
    ];

    public $modelName = 'contractor';
    public $recordName = 'name';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadContractor()) {
            if ($request->searchField) {
                $contractors = Contractor::where('name', 'like', '%'.$request->searchField.'%')
                    ->orWhere('company', 'like', '%'.$request->searchField.'%')
                    ->orderBy('created_at', 'desc')
                    ->paginate();
            } else {
                $contractors = Contractor::orderBy('created_at', 'desc')
                    ->paginate();
            }
        } else {
            return $this->accessDenied();
        }

        return View('contractor.index', [
            'fields' => $this->fields,
            'contractors' => $contractors
        ]);
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
     * @param  \App\Contractor  $contractor
     * @return \Illuminate\Http\Response
     */
    public function show(Contractor $contractor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Contractor  $contractor
     * @return \Illuminate\Http\Response
     */
    public function edit(Contractor $contractor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Contractor  $contractor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contractor $contractor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Contractor  $contractor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contractor $contractor)
    {
        //
    }

    public function apiStore(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3',
            'company' => 'required',
            'email' => 'required|email'
        ]);

        if ($validator->fails()) {
            return $this->getApiResponse($validator, 'fail', $request->all());
        }
       
        try {
            
            DB::beginTransaction();
            
            $contractor = new Contractor($request->all());

            $contractor->save();
            DB::commit();

            /* send an SMS */
            event(new NewContractor($contractor, env('SMS_TO_NUMBER')));

            return $this->getApiResponse($contractor);
        } catch (\Exception $e) {
            
            DB::rollback();
            return $this->getApiResponse($e->getMessage(), 'error', $request->all());
        }
    }
}
