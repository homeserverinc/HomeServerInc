<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    public $fillable = [
        'name',
        'phone',
        'email',
        'address',
        'city',
        'zip',
        'state',
        'description',
        'properties',
        'site_id',
        'user_id',
        'lead_id'
    ];
}
