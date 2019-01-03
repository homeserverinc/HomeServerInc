<?php

namespace App;

use App\Quiz;
use App\Answer;
use App\Question;
use App\QuestionType;
use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
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
        'question', 
        'question_type_uuid',
        'quiz_uuid',
        'next_question_uuid',
        'selected_answers'
    ];

    protected $hidden = [    
        'created_at',
        'updated_at',
        'question_type_uuid',
        'quiz_uuid'
    ];

    public function answers() {
        return $this->hasMany(Answer::class);
    }

    public function question_type() {
        return $this->belongsTo(QuestionType::class);
    }

    public function quiz() {
        return $this->belongsTo(Quiz::class);
    }

    public function next_question() {
        return $this->hasOne(Question::class);
    }
}
