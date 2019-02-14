<?php

namespace App\Listeners;

use App\Events\WorkerActivityChanged;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendWorkerActivityChangeNotification
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
     * @param  WorkerActivityChanged  $event
     * @return void
     */
    public function handle(WorkerActivityChanged $event)
    {
        //
    }
}
