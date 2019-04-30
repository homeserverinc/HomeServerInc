<?php

namespace App;

use App\Site;
use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    protected $fillable = [
        'phone_number',
        'friendly_name',
        'voice_method',
        'voice_url',
        'voide_fallback_method',
        'voice_fallback_url',
        'sid'
    ];

    protected $visible = [
        'friendly_name',
        'phone_number'
    ];

    public function site() {
        return $this->hasOne(Site::class);
    }

    public function scopeNumber($query, $number) {
        return $query->where('phone_number', $number);
    }
}
