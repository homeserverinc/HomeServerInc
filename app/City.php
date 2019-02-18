<?php

namespace App;

use App\Site;
use App\State;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = [
        'city', 
        'state_id', 
        'county', 
        'latitude', 
        'longitude'
    ];

    protected $hidden = [
        'state_id',
        'created_at',
        'updated_at'
    ];

    public function sites() {
        return $this->hasMany(Site::class);
    }

    public function state() {
        return $this->belongsTo(State::class);
    }
}
