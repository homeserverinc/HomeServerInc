<?php

namespace App\Listeners;

use App\Events\NewLeadSms;
use App\Traits\TwimlClientTrait;
use Illuminate\Support\Facades\Log;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use URLShortener;

class SendLeadSmsNotification
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
     * @param  NewLeadSms  $event
     * @return void
     */
    public function handle(NewLeadSms $event)
    {
        $url = (string)URLShortener::shorten(action('LeadsController@index'));
        $url = explode("/", $url)[3];
        $url = "https://prs.link/".$url;
        $twilio = $this->getClient()
            ->messages
            ->create($event->contractor_phone, [
                'from' => '+17812857272',
                'body' => "New lead: \nName: ".$event->lead_first_name." ".$event->lead_last_name." \nCity: ".$event->lead_city."\nPhone: ".$event->lead_phone1."\nMore details: ".$url
            ]);
    }
}