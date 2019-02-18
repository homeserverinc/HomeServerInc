<?php

namespace App;

use App\City;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $fillable = [
        'abbreviation', 
        'state_name'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function cities() {
        return $this->hasMany(City::class);
    }
 }
