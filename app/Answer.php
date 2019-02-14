<?php

namespace App;

use App\Question;
use App\AnswerType;
use App\PropertyType;
use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
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
            'answer', 
            'answer_slug',
            'answer_order',
            'value',
            'next_question_uuid',
            'answer_type_uuid',
            'question_uuid',
        ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function question() {
        return $this->belongsTo(Question::class);
    }

    public function answer_type() {
        return $this->belongsTo(AnswerType::class);
    }

    public function next_question_id() {
        return $this->belongsTo(Question::class);
    }
}
