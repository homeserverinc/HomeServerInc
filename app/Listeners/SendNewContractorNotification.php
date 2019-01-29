<?php

namespace App\Listeners;

use App\Events\NewContractor;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendNewContractorNotification
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
     * @param  NewContractor  $event
     * @return void
     */
    public function handle(NewContractor $event)
    {
        //
    }
}
