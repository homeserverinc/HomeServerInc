<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ContactsController extends Controller
{
    public $fields = [
        'id' => 'ID',
        'name' => 'Customer',
        'phone' => 'Phone',
        'site_name' => 'Site' 
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->searchField) {
            $contacts = DB::table('contacts')
                            ->select('contacts.*', 'sites.name as site_name')
                            ->join('sites', 'sites.id', 'contacts.site_id')
                            ->whereNull('contacts.lead_id')
                            ->where('contacts.user_id', Auth::user()->id)
                            ->orWhereNull('contacts.user_id')
                            ->where('sites.name', 'like', '%'.$request->searchField.'%')
                            ->orWhere('contacts.name', 'like', '%'.$request->searchField.'%')
                            ->orderBy('contacts.id', 'asc')
                            ->paginate();
        } else {
            $contacts = DB::table('contacts')
                            ->select('contacts.*', 'sites.name as site_name')
                            ->join('sites', 'sites.id', 'contacts.site_id')
                            ->whereNull('contacts.lead_id')
                            ->where('contacts.user_id', Auth::user()->id)
                            ->orWhereNull('contacts.user_id')
                            ->orderBy('contacts.id', 'asc')
                            ->paginate();
        }

        return View('contact.index', [
            'contacts' => $contacts,
            'fields' => $this->fields
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
        $contact = new Contact;

        $contact->name = $request->name;
        $contact->phone = $request->phone;
        $contact->email = $request->email;
        $contact->address = $request->address;
        $contact->zip = $request->zip;
        $contact->city = $request->city;
        $contact->state = $request->state;
        $contact->description = $request->description;
        $contact->properties = $request->properties;
        $contact->site_id = 1;

        $contact->save();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }
}
