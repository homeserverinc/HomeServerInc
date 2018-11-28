<?php

namespace App\Listeners;

use App\Events\CallEnded;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendCallEndedNotification
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
     * @param  CallEnded  $event
     * @return void
     */
    public function handle(CallEnded $event)
    {
        //
    }
}
