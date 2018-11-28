<?php

namespace App;

use App\Answer;
use App\QuestionType;
use Illuminate\Database\Eloquent\Model;

class AnswerType extends Model
{
    protected $fillable = [
        'answer_type',
        'question_type_id'
    ];

    public function questionType() {
        return $this->belongsTo(QuestionType::class);
    }

    public function answer() {
        return $this->hasMany(Answer::class);
    }
}
