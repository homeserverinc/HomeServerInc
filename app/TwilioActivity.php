<?php

namespace App;

use App\TwilioWorkspace;
use Illuminate\Database\Eloquent\Model;

class TwilioActivity extends Model
{
    protected $fillable = [
        'sid',
        'friendly_name',
        'available',
        'twilio_workspace_id'
    ];

    public function twilio_workspace() {
        return $this->belongsTo(TwilioWorkspace::class);
    }
}
