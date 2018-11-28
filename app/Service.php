<?php

namespace App;

use App\Lead;
use App\Site;
use App\Category;
use App\Property;
use App\Question;
use App\PropertyService;
use Kalnoy\Nestedset\NodeTrait;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use NodeTrait;

    protected $fillable = [
        'service_description', 
        'question_id'
    ];

    protected $hidden = [
        'category_id',
        'created_at',
        'updated_at',
        '_lft',
        '_rgt',
        'parent_id'
    ];

    
    public function leads() {
        return $this->hasMany(Lead::class);
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function question() {
        return $this->belongsTo(Question::class);
    }

    
    public function site() {
        return $this->belongsTo(Site::class);
    }
}
