<?php

namespace App\Listeners;

use App\Events\NewSiteContact;
use App\Traits\TwimlClientTrait;
use Illuminate\Support\Facades\Log;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Traits\TelegramTrait;

class SendNewSiteContactNotification
{

    use TwimlClientTrait, TelegramTrait;

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
        /* $twilio = $this->getClient()
                        ->messages
                        ->create($event->to, [
                            'from' => $event->contact->site->phone->phone_number,
                            'body' => 'New contact from '.$event->contact->site->name.'. '.action('SiteContactsController@edit', ['uuid' => $event->contact->uuid])
                        ]); */

        $this->sendMessage('[NEW-CONTACT]::['.$event->contact->site->name.']: We have received a new contact. '.action('SiteContactsController@edit', ['uuid' => $event->contact->uuid]));
    }
}
