<?php

namespace App\Http\Controllers;

use App\Quiz;
use App\Service;
use App\Category;
use App\Question;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeServerController;

class QuizzesController extends HomeServerController
{

    use ApiResponse;

    public $fields = [
        'uuid' => 'UUID',
        'quiz' => 'Quiz',
        'category' => 'Category'
    ];

    public $modelName = 'quiz';
    public $recordName = 'quiz';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) 
    {
        if (Auth::user()->canReadQuiz()) {
            if ($request->searchField) {
                $quizzes = DB::table('quizzes')
                                ->select('quizzes.*', 'categories.category')
                                ->join('categories', 'categories.uuid', 'quizzes.category_uuid')
                                ->where('quiz', 'like', '%'.$request->searchField.'%')
                                ->orderBy('created_at', 'desc')
                                ->paginate();
            } else {
                $quizzes = DB::table('quizzes')
                                ->select('quizzes.*', 'categories.category')
                                ->join('categories', 'categories.uuid', 'quizzes.category_uuid')
                                ->orderBy('created_at', 'desc')
                                ->paginate();
            }
            
            return View('quiz.index', [
                'fields' => $this->fields,
                'quizzes' => $quizzes
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateQuiz()) {
            $categories = Category::all();
            return View('quiz.create', [
                'categories' => $categories
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Auth::user()->canCreateQuiz()) {
            $this->validate($request, [
                'quiz' => 'string|unique:quizzes',
                'category_uuid' => 'required'
            ]);

            try {
                $quiz = new Quiz($request->all());
            
                return $this->createRecord($quiz);
            } catch (\Exception $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function edit(Quiz $quiz)
    {
        if (Auth::user()->canUpdateQuiz()) {
            $categories = Category::all();
            $questions = Question::where('quiz_uuid', $quiz->uuid)->get();
            return View('quiz.edit', [
                'categories' => $categories,
                'questions' => $questions,
                'quiz' => $quiz
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Quiz $quiz)
    {
        if (Auth::user()->canUpdateQuiz()) {
            try {
                $quiz->fill($request->all());

                return $this->updateRecord($quiz);
            } catch (\Exception $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function destroy(Quiz $quiz)
    {
        if (Auth::user()->canDeleteQuiz()) {
            return $this->deleteRecord($quiz);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Get all quizzes by a given category
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getQuizzesJson(Request $request) {
        return Quiz::where('category_uuid', $request->uuid)
                ->with('questions.question_type')
                ->with('questions.answers.answer_type')
                ->get()->toJson();
    }

    public function apiGetQuiz(Category $category) {
        try {
            $quiz = Quiz::where('category_uuid', $category->uuid)
                ->with('questions.question_type')
                ->with('questions.answers.answer_type')
                ->first();

            return $this->getApiResponse($quiz);
        } catch (\Exception $e) {
            return $this->getApiResponse($e, 'error');
        }
    }

    public function getQuizzes() {
        return response()->json(Quiz::all());
    }

    public function getQuiz($uuid) {        
        return response()->json(Quiz::find($uuid));
    }

    public function questionsCrud() {
        if (Auth::user()->canAccessQuizQuestionsCrud()) {
            return View('quiz.questions_crud');
        } else {
            return $this->accessDenied();
        }
    }

    public function vueGetQuiz($uuid) {        
        try {
            return $this->getApiResponse(Quiz::find($uuid));
        } catch (\Exception $e) {
            return $this->getApiResponse($e, 'error');
        }
    }
}
