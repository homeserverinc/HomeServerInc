<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class CustomersController extends Controller
{
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
        if (Auth::user()->canCreateCustomer()) {
            $this->validate($request, [
                'name' => 'required|string|min:5',
                'address' => 'present|string',
                'city_id' => 'present|numeric',
                'email1' => 'email|required',
                'email2' => 'present|email',
                'phone1' => 'string|required',
                'phone2' => 'present|string'
            ]);
    
            try {
                $customer = new Customer;
                
                $customer->name = $request->name;
                $customer->address = $request->address;
                $customer->city_id = $request->city_id;
                $customer->email1 = $request->email1;
                $customer->email2 = $request->email2;
                $customer->phone1 = $request->phone1;
                $customer->phone2 = $request->phone2;
     
                if ($customer->save()) {
                    Session::flash('success', 'Customer '.$request->service_description.' successfull created');
                    return redirect()->action('CustomerController@index');
                } else {
                    throw new \Exception('The Customer can not be saved!');
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
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        //
    }

    public function getCustomerByName(Request $request) {
        return Customer::where('name', 'like', $request->name.'%')->get();
    }

    public function getCustomerById(Request $request) {
        return Customer::find($request->id);
    }
}
