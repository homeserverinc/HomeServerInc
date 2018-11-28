<?php

namespace App;

use App\Service;
use App\Property;
use Illuminate\Database\Eloquent\Model;

class PropertyService extends Model
{
    public $fillable = ['service_id', 'property_id', 'property_options', 'is_required', 'field_size'];

    protected $table = 'property_service';

    public function service() {
        return $this->belongsTo(Service::class);
    }

    public function property() {
        return $this->belongsTo(Property::class);
    }
}
