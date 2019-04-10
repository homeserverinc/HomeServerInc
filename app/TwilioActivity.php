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

    public function scopeActivityName($query, $activity) {
        return $query->where('friendly_name', $activity);
    }

    public function scopedActivitySid($query, $sid) {
        return $query->where('sid', $sid);
    }
}
