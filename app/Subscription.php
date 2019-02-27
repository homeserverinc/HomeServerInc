<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuidable;

class Subscription extends Model
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

	public $fillable = [
        'contractor_uuid',
        'plan_uuid',
        'name',
        'stripe_id',
        'closed',
        'trial_ends_at',
        'ends_at',
    ];

    protected $dates = [
        'trial_ends_at',
        'ends_at'
    ];

    public function contractor(){
    	return $this->belongsTo(Contractor::class);
    }
    public function plan(){
    	return $this->belongsTo(Plan::class);
    }
}
