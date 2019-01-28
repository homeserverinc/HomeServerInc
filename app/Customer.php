<?php

namespace App;

use App\City;
use App\Lead;
use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
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
        'uuid',
        'first_name',
        'last_name',
        'street',
        'city',
        'state',
        'zip',
        'email1',
        'email2',
        'phone1', 
        'phone2',
    ];

    public function leads() {
        return $this->hasMany(Lead::class);
    }
}
