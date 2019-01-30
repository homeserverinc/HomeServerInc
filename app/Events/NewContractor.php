<?php

namespace App\Events;

use App\Contractor;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NewContractor
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $contractor;
    public $to;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Contractor $contractor, String $to)
    {
        $this->contractor = $contractor;
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
