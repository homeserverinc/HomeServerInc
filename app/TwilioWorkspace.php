<?php

namespace App;

use App\Agent;
use App\TwilioActivity;
use App\TwilioConfiguration;
use Illuminate\Database\Eloquent\Model;

class TwilioWorkspace extends Model
{
    protected $fillable = [
        'sid', 
        'account_sid', 
        'friendly_name'
    ];

    protected $visible = [
        'sid',
        'friendly_name'
    ];

    public function twilio_activities() {
        return $this->hasMany(TwilioActivity::class);
    }

    public function agents() {
        return $this->hasMany(Agent::class);
    }

    public function twilio_configuration() {
        return $this->hasOne(TwilioConfiguration::class);
    }
}
