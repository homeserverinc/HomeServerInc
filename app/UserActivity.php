<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class UserActivity extends Model
{
    protected $fillable = [
        'user_id',
        'start_session',
        'end_session',
        'session_time'
    ];

    public $timestamps = false;

    public function user() {
        return $this->belongsTo(User::class);
    }
}
