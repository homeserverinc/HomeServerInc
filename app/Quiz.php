<?php

namespace App;

use App\Question;
use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
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
        'quiz',
        'first_question_uuid'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function first_question() {
        return $this->hasOne(Question::class);
    }

    public function questions() {
        return $this->hasMany(Question::class);
    }
}
