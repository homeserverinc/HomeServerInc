<?php

namespace App;

use App\Answer;
use App\Question;
use App\QuestionType;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'question', 
        'question_type_id',
    ];

    public function answers() {
        return $this->hasMany(Answer::class);
    }

    public function question_type() {
        return $this->belongsTo(QuestionType::class);
    }
}
