<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    /**
     * Redirect the user for the home route
     *
     * @return void
     */
    public function home() {
        return redirect()->route('admin.dashboard');
    }

    /**
     * Return a view when receiving a phone call
     *
     * @return void
     */
    public function callListen() {
        return View('receiving_call');
    }

    /**
     * Call an event when hangup a phone call
     *
     * @return void
     */
    public function callHangup() {
        event(new CallEndedEvent(1));
    }
}
