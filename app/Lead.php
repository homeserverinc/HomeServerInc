<?php

namespace App;

use App\Site;
use App\Service;
use App\Customer;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    public $fillable = [
        'customer_id',
        'service_id',
        'user_id',
        'service_properties',
        'description',
        'closed'
    ];

    public function customer() {
        return $this->belongsTo(Customer::class);
    }

    public function service() {
        return $this->belongsTo(Service::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}