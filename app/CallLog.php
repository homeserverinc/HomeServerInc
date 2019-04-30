<?php

namespace App;

use App\Site;
use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class CallLog extends Model
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

    protected $guarded = [];

    public function site() {
        return $this->belongsTo(Site::class);
    }

    public function scopeNotNotified($query) {
        return $query->where('notified', false);
    }
}
