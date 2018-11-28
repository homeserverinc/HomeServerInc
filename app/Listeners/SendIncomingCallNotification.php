<?php

namespace App\Listeners;

use App\Events\IncomingCall;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendIncomingCallNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  IncomingCall  $event
     * @return void
     */
    public function handle(IncomingCall $event)
    {
        //
    }
}
