<?php

namespace App\Http\Controllers;

use App\Service;
use App\Category;
use App\Property;
use App\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class ServicesController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'service_description' => 'Description',
        'category' => 'Category'
    ];

    protected $modelName = 'service';
    protected $recordName = 'service_description';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadService()) {
            if ($request->searchField) {
                $services = DB::table('services')
                    ->select('services.*', 'categories.category')
                    ->join('categories', 'categories.id', 'services.category_id')
                    ->where('service_description', 'like', '%'.$request->searchField.'%')
                    ->where('category', 'like', '%'.$request->searchField.'%')
                    ->orderBy('id', 'desc')
                    ->paginate();
            } else {
                $services = DB::table('services')
                    ->select('services.*', 'categories.category')
                    ->join('categories', 'categories.id', 'services.category_id')
                    ->orderBy('id', 'desc')
                    ->paginate();
            }
    
            return View('service.index', [
                'services' => $services,
                'fields' => $this->fields
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
        if (Auth::user()->canCreateService()) {
            $categories = Category::all();
            $questions = Question::all();
        
            return View('service.create', [
                'categories' => $categories,
                'questions' => $questions
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
        if (Auth::user()->canCreateService()) {
            $this->validate($request, [
                'service_description' => 'required|string|min:5',
                'category_id' => 'numeric|required'
            ]);
    
            try {
                $service = new Service($request->all());
    
                return $this->createRecord($service);
            } catch (\Exception  $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $service)
    {
        if (Auth::user()->canUpdateService()) {

            $categories = Category::all();
            $questions = Question::all();
        
            return View('service.edit', [
                'service' => $service,
                'categories' => $categories,
                'questions' => $questions
            ]);
        } else {
            return $this->accessDenied();
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {
        if (Auth::user()->canUpdateService()) {
            $this->validate($request, [
                'service_description' => 'required|string|min:5',
            ]);

            try {
                $service->fill($request->all());

                return $this->updateRecord($service);
            } catch (\Exception  $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy(Service $service)
    {
        if (Auth::user()->canDeleteService()) {
            return $this->deleteRecord($service);
        } else {
            return $this->accessDenied();
        }
    }

    public function apiGetService(Service $service) {
        return response()->json(Service::with('category')
                                            ->with('question.question_type')
                                            ->with('question.answers.answer_type')
                                            ->find($service->id));
    }
}
