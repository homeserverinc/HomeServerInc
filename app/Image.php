<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuidable;

class Image extends Model
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
        'file',
        'width',
        'height',
        'category_uuid',
        'image_type_uuid',
    ];

    protected $dates = [
        'created_at',
        'update_at'
    ];

    public function category(){
    	return $this->belongsTo(Category::class);
    }
    public function image_type(){
    	return $this->belongsTo(ImageType::class);
    }
}
