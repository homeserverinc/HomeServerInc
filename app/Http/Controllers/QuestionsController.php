<?php

namespace App\Http\Controllers;

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
        'id' => 'ID',
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
                                        ->join('question_types', 'question_types.id', 'questions.question_type_id')
                                        ->where('questions.question', 'like', '%'.$request->searchField.'%')
                                        ->orderBy('id', 'desc')
                                        ->paginate();
            } else {
                $questions = Question::select('questions.*', 'question_types.question_type')
                                        ->join('question_types', 'question_types.id', 'questions.question_type_id')
                                        ->orderBy('id', 'desc')
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

            return View('question.create', [
                'next_questions' => $questions,
                'questions' => $questions,
                'questionTypes' => $questionTypes
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
            //return redirect()->back()->withInput();
            $this->validate($request, [
                'question' => 'required|string',
                'question_type_id' => 'required|numeric',
            // 'answers' => 'required|array|size:1'
            ]);

            try {           

                DB::beginTransaction();
                
                $question = new Question($request->all());
                $question->field_name = str_slug($question->question, '-');

                $question = $this->createRecord($question, false);

                $answers = array();
                foreach ($request->answers as $answer) {
                    $answer['answer_slug'] = str_slug($answer['answer']);
                    array_push($answers, $answer);
                }

                $question->answers()->createMany($answers);
                
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
            $questionTypes = QuestionType::all()->except($question->id);
            $answers = $question->answers()->with('answer_type')->get();

            foreach($answers as $answer) {
                if ($answer->next_question_id) {
                    $answer->next_question = Question::find($answer->next_question_id);
                }
            }

            return View('question.edit', [
                'question' => $question,
                'next_questions' => Question::where('id',  '<>', $question->id)->get(),
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

                $question = $this->updateRecord($question, false);

                /* Save the answers */
                $atualAnswers = array();
                foreach($request->answers as $answer) {
                    $a = Answer::find($answer['answer_id']);
                    if ($a) {
                        $a->fill($answer);
                        $saved = $question->answers()->save($a);
                    } else {
                        $saved = $question->answers()->save(new Answer($answer));
                    }
                    array_push($atualAnswers, $saved->id);
                }

                /* Remove orphan answers */
                $question->answers()->whereNotIn('id', $atualAnswers)->delete();

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
                    Session::flash('error', 'This Question are in use, and can not be removed.');
                    return redirect()->action('QuestionsController@index');
                    break;
                default:
                    Session::flash('error', 'Oops, have one error...'.$e->getMessage());
                    return redirect()->action('QuestionsController@index');
                    break;
            }
        }
    }

    public function getQuestionById($question_id) {
        $question = Question::with('answers')->find($question_id);

        return $question;
    }

    public function getQuestionsExcept(Int $except = null) {
        return response()->json(Question::with('answers.answer_type')->get()->except($except)->except($except)); 
    }

    public function apiGetQuestion(Question $question) {
        return response()->json(Question::with('question_type')
                                            ->with('answers.answer_type')            
                                            ->find($question->id));
    }
}
