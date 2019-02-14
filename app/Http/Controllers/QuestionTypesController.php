<?php

namespace App\Http\Controllers;

use App\QuestionType;
use Illuminate\Http\Request;

class QuestionTypesController extends Controller
{
    public function questionTypesJson() {
        return QuestionType::all()->toJson();
    }
}
