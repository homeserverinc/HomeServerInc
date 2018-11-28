<?php

namespace App;

use App\Property;
use Illuminate\Database\Eloquent\Model;

class PropertyType extends Model
{
    public function property() {
        return $this->belongsTo(Property::class);
    }
}
