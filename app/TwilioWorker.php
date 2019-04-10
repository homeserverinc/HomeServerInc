<?php

namespace App;

use App\Agent;
use App\TwilioWorkspace;
use Illuminate\Database\Eloquent\Model;

class TwilioWorker extends Model
{
    protected $fillable = [
        'sid',
        'friendly_name',
        'attributes',
        'twilio_workspace_id'
    ];

    protected $visible = [
        'id',
        'sid',
        'friendly_name',
        'twilio_workspace_id'
    ];

    public function twilio_workspace() {
        return $this->belongsTo(TwilioWorkspace::class);
    }
    
    public function agent() {
        return $this->hasOne(Agent::class);
    }
}
