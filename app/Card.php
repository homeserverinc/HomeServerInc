<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuidable;

class Card extends Model
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
        'card_brand',
        'card_last_four',
        'default',
        'active',
        'contractor_uuid',
        'stripe_id',
        'token',
        'exp_month',
        'exp_year',
    ];


    public function contractor(){
    	return $this->belongsTo(Contractor::class);
    }

}
