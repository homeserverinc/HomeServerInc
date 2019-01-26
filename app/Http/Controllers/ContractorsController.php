<?php

namespace App\Http\Controllers;

use App\Contractor;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContractorsController extends Controller
{
    use ApiResponse;
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

    public function apiStore(Contractor $contractor) {
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

            return $this->getApiResponse($contractor);
        } catch (\Exception $e) {
            
            DB::rollback();
            return $this->getApiResponse($e->getMessage(), 'error', $request->all());
        }
    }
}
