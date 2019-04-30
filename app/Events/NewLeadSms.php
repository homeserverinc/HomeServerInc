<?php

namespace App\Events;

use App\Contractor;
use App\Lead;
use Illuminate\Support\Facades\Log;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NewLeadSms
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $contractor_phone;
    public $lead_first_name;
    public $lead_last_name;
    public $lead_city;
    public $lead_phone1;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(String $contractor_phone, String $lead_first_name, String $lead_last_name, String $lead_city, String $lead_phone1)
    {
        $this->contractor_phone = $contractor_phone;
        $this->lead_first_name = $lead_first_name;
        $this->lead_last_name = $lead_last_name;
        $this->lead_city = $lead_city;
        $this->lead_phone1 = $lead_phone1;
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
