<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuidable;
class Charge extends Model
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
        'description',
        'amount',
        'contractor_uuid',
        'stripe_id',
        'card_uuid'
    ];


    public function contractor(){
        return $this->belongsTo(Contractor::class);
    }
    
    public function card(){
    	return $this->belongsTo(Card::class);
    }
}
