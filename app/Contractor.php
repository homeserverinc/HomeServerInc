<?php

namespace App;

use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class Contractor extends Model
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
        'company', 
        'address', 
        'phone', 
        'site',
        'user_id',
        'plan_uuid',
        'ssn',
        'ein',
        'stripe_id',
        'wallet',
        'automatic_recharge_amount',
        'automatic_recharge_trigger',
        'active'
    ];

    public static function boot() {
        parent::boot();
        self::uuid();
        //delete dependencies
        static::deleting(function($contractor) { // before delete() method call this
            $contractor->charges()->delete();
            $contractor->cards()->delete();
            $contractor->user->roles()->detach();
            $contractor->categories()->detach();
            $contractor->subscriptions()->delete();
        });

        static::deleted(function($contractor) { // after delete() method call this
            $contractor->user->delete();
        });
    }


    public function user() {
        return $this->belongsTo(User::class);
    }

    public function plan() {
        return $this->belongsTo(Plan::class);
    }

    public function subscriptions() {
        return $this->hasMany(Subscription::class);
    }

    public function cards(){
        return $this->hasMany(Card::class);
    }

     public function charges(){
        return $this->hasMany(Charge::class);
    }

    public function default_card(){
        return $this->hasMany(Card::class)->where('default', '=', 1);
    }

    public function categories() {
        return $this->belongsToMany(Category::class);
    }

    public function leads() {
        return $this->belongsToMany(Lead::class)->withTimestamps();
    }

}
