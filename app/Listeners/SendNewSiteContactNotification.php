<?php

namespace App\Listeners;

use App\Events\NewSiteContact;
use App\Traits\TwimlClientTrait;
use Illuminate\Support\Facades\Log;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendNewSiteContactNotification
{

    use TwimlClientTrait;

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
     * @param  NewSiteContact  $event
     * @return void
     */
    public function handle(NewSiteContact $event)
    {
        Log::debug('Handle NewSiteContact Event');
        $twilio = $this->getClient()
                        ->messages
                        ->create($event->to, [
                            'from' => $event->contact->site->phone->phone_number,
                            'body' => 'New contact from '.$event->site->name.'.'
                        ]);
    }
}
