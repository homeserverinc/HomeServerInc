<?php

namespace App;

use App\TwilioConfiguration;
use Illuminate\Database\Eloquent\Model;

class TwilioWorkflow extends Model
{
    protected $fillable = [
        'sid',
        'friendly_name',
        'account_sid',
        'workspace_sid'
    ];

    public function twilio_configuration() {
        return $this->hasOne(TwilioConfiguration::class);
    }
}
