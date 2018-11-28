<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recording extends Model
{
    public $fillable = [
        'account_sid',
        'call_sid',
        'recording_sid',
        'duration',
        'recording_created_at',
        'recording_updated_at',
        'user_id',
        'user_get_at',
        'answered'
    ];
}
