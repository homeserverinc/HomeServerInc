<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    public function user() {
        return $this->belongsTo(User::class);
    }
}
