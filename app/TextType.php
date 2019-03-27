<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuidable;

class TextType extends Model
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

    public $fillable = [
        'type',
    ];

    protected $dates = [
        'created_at',
        'update_at'
    ];

    public function texts(){
    	return $this->hasMany(Text::class);
    }
}
