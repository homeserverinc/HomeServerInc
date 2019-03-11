<?php

namespace App;

use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
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
        'description',
        'price',
        'interval',
        'interval_count',
        'stripe_id',
        'qnt_leads',
        'unique_leads',
        'share_count',
        'category_lead_uuid'
    ];

    public function contractors() {
        return $this->hasMany(Contractor::class);
    }

    public function subscriptions() {
        return $this->hasMany(Subscription::class);
    }

    public function category_lead(){
        return $this->belongsTo(CategoryLead::class);
    }

  
}
