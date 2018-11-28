<?php

namespace App;

use App\Site;
use App\Service;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'category'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'pivot'
    ];

    public function services() {
        return $this->hasMany(Service::class);
    }

    public function sites() {
        return $this->hasMany(Site::class);
    }
}
