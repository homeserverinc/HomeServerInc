<?php

namespace App\Events;

use App\SiteContact;
use Illuminate\Support\Facades\Log;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NewSiteContact
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $contact;
    public $to;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(SiteContact $contact, String $to)
    {
        $this->contact = $contact;
        $this->to = $to;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        //return new PrivateChannel('channel-name');
    }
}
