<?php

namespace App;

use App\Question;
use App\AnswerType;
use App\PropertyType;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $fillable = [
            'answer', 
            'answer_slug',
            'answer_order',
            'answer_type_id', 
            'value',
            'question_id',
            'next_question_id'
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
