<?php

namespace App;

use App\AnswerType;
use Illuminate\Database\Eloquent\Model;

class QuestionType extends Model
{
    protected $fillable = [
        'question_type'
    ];

    public function answerTypes() {
        return $this->hasMany(AnswerType::class);
    }
}
