<?php

namespace App;

use App\Site;
use App\Category;
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
        'closed',
        'category_lead_uuid',
        'unique'
    ];

    public function customer() {
        return $this->belongsTo(Customer::class);
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function category_lead() {
        return $this->belongsTo(CategoryLead::class);
    }

    public function filtered_lead() {
        return $this->hasOne(FilteredLead::class);
    }

    public function contractors() {
        return $this->belongsToMany(Contractor::class)->withTimestamps();
    }
}