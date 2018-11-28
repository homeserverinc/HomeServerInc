<?php

namespace App;

use App\SipDomain;
use App\SipCredential;
use Illuminate\Database\Eloquent\Model;

class SipCredentialList extends Model
{
    protected $fillable = ['sid', 'account_sid', 'friendly_name'];

    public function sip_credentials() {
        return $this->hasMany(SipCredential::class);
    }

    public function sip_domains() {
        return $this->belongsToMany(SipDomain::class);
    }
}
