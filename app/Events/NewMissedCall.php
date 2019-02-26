<?php

namespace App\Events;

use App\MissedCall;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NewMissedCall
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $missedCall;
    public $to;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(MissedCall $missedCall, String $to)
    {
        $this->missedCall = $missedCall;
        $this->to = $to;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        //
    }
}
