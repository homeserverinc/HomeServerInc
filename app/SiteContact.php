<?php

namespace App;

use App\Site;
use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class SiteContact extends Model
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
        'site_uuid',
        'name',
        'phone',
        'email',
        'message',
        'contact_type_preference',
        'contact_time_preference'
    ];

    public function site() {
        return $this->belongsTo(Site::class);
    }
}
