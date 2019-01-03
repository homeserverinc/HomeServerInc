<?php

namespace App\Http\Controllers;

use App\Quiz;
use App\Answer;
use App\Question;
use App\QuestionType;
use App\AnswerQuestion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class QuestionsController extends HomeServerController
{
    public $fields = [
        'uuid' => 'UUID',
        'question' => 'Question',
        'question_type' => 'Type'
    ];

    protected $modelName = 'question';
    protected $recordName = 'question';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) 
    {
        if (Auth::user()->canReadQuestion()) {
            if ($request->searchField) {
                $questions = Question::select('questions.*', 'question_types.question_type')
                                        ->join('question_types', 'question_types.uuid', 'questions.question_type_uuid')
                                        ->where('questions.question', 'like', '%'.$request->searchField.'%')
                                        ->orderBy('created_at', 'desc')
                                        ->paginate();
            } else {
                $questions = Question::select('questions.*', 'question_types.question_type')
                                        ->join('question_types', 'question_types.uuid', 'questions.question_type_uuid')
                                        ->orderBy('created_at', 'desc')
                                        ->paginate();
            }
            /* dd($questions); */
            return View('question.index')
                        ->withFields($this->fields)
                        ->withQuestions($questions);
        } else {
            $this->accessDenied();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {  
        if (Auth::user()->canCreateQuestion()) {
            $questionTypes = QuestionType::all();
            $questions = Question::all();
            $quizzes = Quiz::all();

            return View('question.create', [
                'next_questions' => $questions,
                'questions' => $questions,
                'questionTypes' => $questionTypes,
                'quizzes' => $quizzes
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
        if (Auth::user()->canCreateQuestion()) {
            $this->validate($request, [
                'question' => 'required|string',
                'question_type_uuid' => 'required',
                'quiz_uuid' => 'required'
            ]);

            try {           

                DB::beginTransaction();
                
                $question = new Question($request->all());
                $question->field_name = str_slug($question->question, '-');
                $question->next_question_uuid = $request->singleNextQuestion;
                $question->selected_answers = '';
                $question->custom_answer = '';

                $question = $this->createRecord($question, false);
                
                if (!$question->quiz->first_question_uuid) {
                    $quiz = $question->quiz;
                    $quiz->first_question_uuid = $question->uuid;
                    $quiz->save();    
                }

                $answers = array();
                foreach ($request->answers as $answer) {
                    $answer['answer_slug'] = str_slug($answer['answer']);
                    array_push($answers, $answer); 
                }

                try {
                    $question->answers()->createMany($answers);
                } catch (\Exception $e) {
                    throw $e;
                }
                
                
                DB::commit();
                
                return $this->createSuccess($question);
            } catch (\Exception $e) {
                DB::rollback();
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function edit(Question $question)
    {      
        if (Auth::user()->canUpdateQuestion()) {         
            $questionTypes = QuestionType::all()->except(['question_uuid' => $question->uuid]);

            $answers = $question->answers()
                                ->with('answer_type')
                                ->orderBy('answers.answer', 'asc')
                                ->get();

            foreach($answers as $answer) {
                if ($answer->next_question_uuid) {
                    $answer->next_question = Question::where('uuid', $answer->next_question_uuid)->first();
                }
            }


            return View('question.edit', [
                'question' => $question,
                'next_questions' => Question::where('uuid',  '<>', $question->uuid)->get(),
                'answers' => $answers,
                'questionTypes' => $questionTypes
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question)
    {
        //return redirect()->back()->withInput();
        if (Auth::user()->canUpdateQuestion()) {
            $this->validate($request, [
                'question' => 'required|string'
            ]);

            try {
                DB::beginTransaction();

                /* Save the question */
                $question->question = $request->question;
                $question->next_question_uuid = $request->singleNextQuestion;

                $question = $this->updateRecord($question, false);

                /* Save the answers */
                $atualAnswers = array();
                foreach($request->answers as $answer) {
                    $a = Answer::where('uuid', $answer['answer_uuid'])->first();
                    if ($a) {
                        $a->fill($answer);
                        $saved = $question->answers()->save($a);
                    } else {
                        $answer['answer_slug'] = \str_slug($answer['answer']);
                        $saved = $question->answers()->save(new Answer($answer));
                    }
                    array_push($atualAnswers, $saved->uuid);
                }

                /* Remove orphan answers */
                $question->answers()->whereNotIn('uuid', $atualAnswers)->delete();

                DB::commit();
                
                Session::flash('success', 'Question successfull changed');
                return redirect()->action('QuestionsController@index');

            } catch (\Exception $e) {
                DB::rollback();

                Session::flash('error', 'Oops, have one error...'.$e->getMessage());
                return redirect()->back()->withInput();
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question)
    {
        try {
            if ($question->delete()) {
                Session::flash('success', 'Question '.$question->question.' successfull removed.');
                
                return redirect()->action('QuestionsController@index');
            }
        } catch (\Exception $e) {
            switch ($e->getCode()) {
                case 23000:
                    Session::flash('error', 'This Question are in use, and can not be removed.'.$e->getMessage());
                    return redirect()->action('QuestionsController@index');
                    break;
                default:
                    Session::flash('error', 'Oops, have one error...'.$e->getMessage());
                    return redirect()->action('QuestionsController@index');
                    break;
            }
        }
    }

    public function getQuestionByUuid($question_uuid) {
        $question = Question::with('answers')->where('uuid', $question_uuid)->first();

        return $question;
    }

    public function getQuestionsExcept(String $except = null) {
        return response()->json(Question::with('answers.answer_type')->get()->except($except)->except($except)); 
    }

    public function apiGetQuestion(Question $question) {
        return response()->json(Question::with('question_type')
                                            ->with('answers.answer_type')            
                                            ->where('uuid', $question->uuid)->first());
    }
}
