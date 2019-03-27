<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuidable;

class Text extends Model
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
        'category_uuid',
        'text_type_uuid',
        'brief',
        'fullText',
    ];

    protected $dates = [
        'created_at',
        'update_at'
    ];

    public function category(){
    	return $this->belongsTo(Category::class);
    }
    public function text_type(){
    	return $this->belongsTo(TextType::class);
    }
}
