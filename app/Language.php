<?php

namespace App;

use App\Agent;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    public function agents() {
        return $this->belongsToMany(Agent::class);
    }
}
