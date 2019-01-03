<?php

namespace App;

use App\Answer;
use App\QuestionType;
use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class AnswerType extends Model
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
        'answer_type',
        'question_type_uuid',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function questionType() {
        return $this->belongsTo(QuestionType::class);
    }

    public function answer() {
        return $this->hasMany(Answer::class);
    }
}
