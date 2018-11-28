<?php

namespace App;

use App\Service;
use App\Category;
use App\PropertyType;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    public $fillable = [
        'property_name',
        'property_label',
        'property_type_id',
        'category_id',
        'field_size'
    ];

    public function services() {
        return $this->belongsToMany(Service::class)->withPivot('property_options', 'is_required', 'field_size');
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function propertyType() {
        return $this->belongsTo(PropertyType::class);
    }
}
