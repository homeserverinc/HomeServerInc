<?php

namespace App;

use App\Site;
use App\Agent;
use App\Language;
use Illuminate\Database\Eloquent\Model;

class MissedCall extends Model
{  
    protected $fillable = [
        'datetime_call',
        'site_uuid',
        'language_id',
        'from',
        'returned',
        'agent_id'
    ];

    public function site() {
        return $this->belongsTo(Site::class);
    }

    public function language() {
        return $this->belongsTo(Language::class);
    }

    public function agent() {
        return $this->belongsTo(Agent::class);
    }
}
