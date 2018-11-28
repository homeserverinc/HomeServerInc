<?php

namespace App;

use App\Agent;
use App\SipCredentialList;
use Illuminate\Database\Eloquent\Model;

class SipCredential extends Model
{
    protected $fillable = ['sip_credential_list_id', 'sid', 'account_sid', 'username'];

    protected $hidden = ['password'];

    public function sip_credential_list() {
        return $this->belongsTo(SipCredentialList::class);
    }

    public function agent() {
        return $this->hasOne(Agent::class);
    }
 }
