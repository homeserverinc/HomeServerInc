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
        $twilio = $this->getClient()
                    ->messages
                    ->create($event->to, [
                        'from' => $event->contractor->site->phone->phone_number,
                        'body' => 'New contractor from '.$event->contractor->site->name.'. '.action('ContractorsController@edit', ['uuid' => $event->contractor->uuid])
                    ]);
    }
}
