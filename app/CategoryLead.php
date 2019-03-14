<?php

namespace App;

use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class CategoryLead extends Model
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
        'name',
        'price'
    ];

    public function categories() {
        return $this->belongsToMany(Category::class, 'category_lead_category')->withPivot('weight', 'price');
    }

    public function plans(){
        return $this->belongsToMany(Plan::class, 'plan_category_lead');
    }

    public function leads(){
        return $this->hasMany(Lead::class);
    }
}