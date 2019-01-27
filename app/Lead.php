<?php

namespace App;

use App\Site;
use App\Service;
use App\Customer;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
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
        'customer_uuid',
        'service_uuid',
        'deadline',
        'project_details',
        'questions',
        'verified_data',
        'closed'
    ];

    public function customer() {
        return $this->belongsTo(Customer::class);
    }

    public function service() {
        return $this->belongsTo(Service::class);
    }
}