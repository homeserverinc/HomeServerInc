<?php

namespace App\Http\Controllers;

use App\Service;
use App\Question;
use App\QuestionService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class QuestionServiceController extends Controller
{
    public $fields = [
        'id' => 'ID',
        'service_description' => 'Service',
        'question' => 'Question'
    ];
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->searchField) {
            $questionServices = DB::table('question_service')
                                    ->select('question_service.*', 'services.service_description', 'questions.question')
                                    ->join('services', 'services.id', 'question_service.service_id')
                                    ->join('questions', 'questions.id', 'question_service.question_id')
                                    ->where('services.description', 'like', '%'.$request->searchField.'%')
                                    ->orWhere('questions.name', 'like', '%'.$request->searchField.'%')
                                    ->orderBy('question_service.service_id', 'desc')
                                    ->paginate();
        } else {
            $questionServices = DB::table('question_service')
                                    ->select('question_service.*', 'services.service_description', 'questions.question')
                                    ->join('services', 'services.id', 'question_service.service_id')
                                    ->join('questions', 'questions.id', 'question_service.question_id')
                                    ->orderBy('question_service.service_id', 'desc')
                                    ->paginate();
        }

        return View('question_service.index', [
            'fields' => $this->fields,
            'questionServices' => $questionServices
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $services = Service::all();
        $questions = Question::all();

        return View('question_service.create', [
            'services' => $services,
            'questions' => $questions
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'service_id' => 'required|numeric',
            'question_id' => 'required|numeric'
        ]);

        try {
            $questionService = new QuestionService($request->all());

            if ($questionService->save()) {
                Session::flash('success', 'Service vs Question successfull created');
                return redirect()->action('QuestionServiceController@index');
            }
        } catch (\Exception $e) {
            Session::flash('error', 'Oops, have one error...'.$e->getMessage());
            return redirect()->back()->withInput();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\QuestionService  $questionService
     * @return \Illuminate\Http\Response
     */
    public function show(QuestionService $questionService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\QuestionService  $questionService
     * @return \Illuminate\Http\Response
     */
    public function edit(QuestionService $questionService)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\QuestionService  $questionService
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, QuestionService $questionService)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\QuestionService  $questionService
     * @return \Illuminate\Http\Response
     */
    public function destroy(QuestionService $questionService)
    {
        if (Auth::user()->canDeleteQuestionService()) {
            try {
                if ($questionService->delete()) {
                    Session::flash('success', 'Service vs Question successfull removed.');
                    
                    return redirect()->action('QuestionServiceController@index');
                }
            } catch (\Exception $e) {
                switch ($e->getCode()) {
                    case 23000:
                        Session::flash('error', 'This Service vs Question are in use, and can not be removed.');
                        return redirect()->action('QuestionServiceController@index');
                        break;
                    default:
                        Session::flash('error', 'Oops, have one error...'.$e->getMessage());
                        return redirect()->action('QuestionServiceController@index');
                        break;
                }
            }
        } else {
            Session::flash('error', env('ACCESS_DENIED_MSG'));
            return redirect()->back();
        }
    }
}
