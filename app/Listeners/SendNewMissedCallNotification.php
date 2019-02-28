<?php

namespace App\Listeners;

use App\Events\NewMissedCall;
use App\Traits\TwimlClientTrait;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendNewMissedCallNotification
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
     * @param  NewMissedCall  $event
     * @return void
     */
    public function handle(NewMissedCall $event)
    {
        $twilio = $this->getClient()
                        ->messages
                        ->create($event->to, [
                            'from' => $event->missedCall->site->phone->phone_number,
                            'body' => 'Missed call from '.$event->missedCall->from.' ('.$event->missedCall->site->name.'). '.action('MissedCallsController@index')
                        ]);
    }
}
