<?php

namespace App;

use App\Service;
use App\Question;
use Illuminate\Database\Eloquent\Model;

class QuestionService extends Model
{
    protected $fillable = [
        'question_id',
        'service_id'
    ];

    protected $table = 'question_service';

    public function question() {
        return $this->belongsTo(Question::class);
    }

    public function service() {
        return $this->belongsTo(Service::class);
    }
}
