<?php

namespace App;

use App\Lead;
use App\Quiz;
use App\Site;
use App\Category;
use App\Property;
use App\Question;
use App\PropertyService;
use App\Traits\Uuidable;
use Kalnoy\Nestedset\NodeTrait;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use NodeTrait;
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
        'service_description', 
        'category_uuid',
        'quiz_uuid'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        '_lft',
        '_rgt',
        'parent_id',
    ];

    
    public function leads() {
        return $this->hasMany(Lead::class);
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function quiz() {
        return $this->belongsTo(Quiz::class);
    }
}
