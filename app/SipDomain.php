<?php

namespace App;

use App\SipCredentialList;
use App\TwilioConfiguration;
use Illuminate\Database\Eloquent\Model;

class SipDomain extends Model
{
    protected $fillable = [
        'domain_name'
    ];

    public function sip_credential_lists() {
        return $this->belongsToMany(SipCredentialList::class);
    }

    public function twilio_configuration() {
        return $this->hasOne(TwilioConfiguration::class);
    }
}
