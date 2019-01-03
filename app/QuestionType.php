<?php

namespace App;

use App\AnswerType;
use App\Traits\Uuidable;
use Illuminate\Database\Eloquent\Model;

class QuestionType extends Model
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
        'question_type'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function answerTypes() {
        return $this->hasMany(AnswerType::class);
    }
}
