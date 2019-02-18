<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CallRoute extends Model
{
    protected $table = 'call_routes';

    public $fillable = [
        'description',
        'phone_id',
        'to_destination',
        'destination_value',
        'priority',
        'active'
    ];
}
