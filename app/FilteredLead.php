<?php

namespace App;

use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class FilteredLead extends Model
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
        'user_id',
        'lead_uuid',
        'reason',
        'accepted',
    ];

    public function lead() {
        return $this->belongsTo(Lead::class);
    }
    public function user() {
        return $this->belongsTo(User::class);
    }
}
