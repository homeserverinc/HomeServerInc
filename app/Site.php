<?php

namespace App;

use App\City;
use App\Phone;
use App\State;
use App\Category;
use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    use Uuidable;

    protected $fillable = [
        'name', 
        'phone_id', 
        'address', 
        'state_id', 
        'city_id', 
        'category_id', 
        'voicemessage'
    ];

    protected $hidden = [
        'id',
        'phone_id',
        'voicemessage',
        'state_id',
        'city_id',
        'created_at',
        'updated_at',
        'pivot'
    ];

    public function categories() {
        return $this->belongsToMany(Category::class);
    }

    public function city() {
        return $this->belongsTo(City::class);
    }

    public function state() {
        return $this->belongsTo(State::class);
    }

    public function phone() {
        return $this->belongsTo(Phone::class);
    }
}
