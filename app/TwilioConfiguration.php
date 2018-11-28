<?php

namespace App;

use App\SipDomain;
use App\TwilioWorkflow;
use App\TwilioWorkspace;
use Illuminate\Database\Eloquent\Model;

class TwilioConfiguration extends Model
{
    protected $fillable = [
        'sip_domain_id',
        'twilio_workspace_id',
        'twilio_workflow_id'
    ];

    public function sip_domain() {
        return $this->belongsTo(SipDomain::class);
    }

    public function twilio_workspace() {
        return $this->belongsTo(TwilioWorkspace::class);
    }

    public function twilio_workflow() {
        return $this->belongsTo(TwilioWorkflow::class);
    }
}
