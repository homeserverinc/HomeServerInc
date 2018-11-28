<?php

namespace App;

use App\User;
use App\Language;
use App\PendingTask;
use App\TwilioWorker;
use App\SipCredential;
use App\TwilioWorkspace;
use Illuminate\Database\Eloquent\Model;

class Agent extends Model
{
    protected $fillable = [
        'user_id', 
        'agent_status_id', 
        'app_client_type', 
        'sip_credential_id',
        'twilio_workspace_id',
        'twilio_worker_id'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function languages() {
        return $this->belongsToMany(Language::class);
    }

    public function sip_credential() {
        return $this->belongsTo(SipCredential::class);
    }

    public function twilio_workspace() {
        return $this->belongsTo(TwilioWorkspace::class);
    }

    public function twilio_worker() {
        return $this->belongsTo(TwilioWorker::class);
    }

    public function pending_tasks() {
        return $this->hasMany(PendingTask::class);
    }
}
