<?php

namespace App;

use App\Site;
use App\Service;
use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
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
        'category'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function services() {
        return $this->hasMany(Service::class);
    }

    public function sites() {
        return $this->belongsToMany(Site::class);
    }

    public function leads() {
        return $this->hasMany(Lead::class);
    }
    
    public function contractors() {
        return $this->belongsToMany(Contractor::class);
    }

    public function category_leads() {
        return $this->belongsToMany(CategoryLead::class, 'category_lead_category')->withPivot('weight', 'price');
    }
}
