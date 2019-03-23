<?php

namespace App\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Events\EmailNotification;
use App\Mail\Notification;
use Illuminate\Support\Facades\Mail;
class SendEmailNotification
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
     * @param  object  $event
     * @return void
     */
    public function handle(EmailNotification $event)
    {
        Mail::to($event->customer->email1)->send(new Notification($event->customer));
    }
}
