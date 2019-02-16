<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        'App\Events\IncomingCall' => [
            'App\Listeners\SendIncomingCallNotification'
        ],
        'App\Events\CallEnded' => [
            'App\Listeners\SendCallEndedNotification'
        ],
        'App\Events\WorkerActivityChanged' => [
            'App\Listeners\SendWorkerActivityChangeNotification'
        ],
        'App\Events\NewSiteContact' =>  [
            'App\Listeners\SendNewSiteContactNotification'
        ],
        'App\Events\NewContractor' =>  [
            'App\Listeners\SendNewContractorNotification'
        ],
        'App\Events\NewMissedCall' =>  [
            'App\Listeners\SendNewMissedCallNotification'
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
