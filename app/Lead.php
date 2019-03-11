<?php

namespace App;

use App\Site;
use App\Service;
use App\Customer;
use App\Traits\Uuidable;
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
        'category_uuid',
        'deadline',
        'project_details',
        'questions',
        'verified_data',
        'closed'
    ];

    public function customer() {
        return $this->belongsTo(Customer::class);
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }
}