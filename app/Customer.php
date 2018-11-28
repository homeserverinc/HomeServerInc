<?php

namespace App;

use App\Lead;
use App\City;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    public $fillable = [
        'name',
        'address',
        'city_id',
        'email1',
        'email2',
        'phone1', 
        'phone2',
    ];

    public function leads() {
        return $this->hasMany(Lead::class);
    }

    public function city() {
        return $this->belongsTo(City::class);
    }
}
