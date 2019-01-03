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
    
    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'uuid';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;
    
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
