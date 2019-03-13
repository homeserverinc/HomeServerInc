<?php

namespace App\Http\Controllers;

use App\Quiz;
use App\Site;
use App\Category;
use App\CategoryLead;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class CategoriesController extends HomeServerController
{
    use ApiResponse;

    public $fields = [
        'uuid' => 'UUID',
        'category' => 'Category',
        'quiz.quiz' => 'Quiz'
    ];

    protected $modelName = 'category';
    protected $recordName = 'category';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) 
    {
        if (Auth::user()->canReadCategory()) {
            if ($request->searchField) {
                $categories = Category::with('quiz')->where('category', 'like', '%'.$request->searchField.'%')
                                ->paginate();
            } else {
                $categories = Category::with('quiz')->paginate();
            }
            //dd($categories);

            return View('category.index', [
                'categories' => $categories,
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
        if (Auth::user()->canCreateCategory()) {
            $category_leads = CategoryLead::all();
            $quizzes = Quiz::orderBy('quiz', 'asc')->get();
            return View('category.create', [
                'category_leads' => $category_leads,
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
        if (Auth::user()->canCreateCategory()) {
            $this->validate($request, [
                'category' => 'string|unique:categories',
                'quiz_uuid' => 'required'
            ]);
            try {
                
                DB::beginTransaction();
                
                $category = new Category($request->all());
                $category->save();

                $collectionW = collect($request->input("weights"));
                $collectionP = collect($request->input("prices"));
                $collectionW = $collectionW->map(function($item, $key){
                    return $item ?? 0;
                })->toArray();
                $collectionP = $collectionP->map(function($item, $key){
                    return $item ?? 0;
                })->toArray();
                $uuids = array_keys($collectionW);
                $category_leads = CategoryLead::whereIn('uuid', $uuids)->get();
                $category_leads = $category_leads->mapWithKeys(function($item) use($collectionW, $collectionP){
                    return [$item['uuid'] => ['weight' => $collectionW[$item->uuid], 'price' => $collectionP[$item->uuid]]];
                });
                $category->category_leads()->attach($category_leads->toArray());

                $this->createRecord($category);

                DB::commit();
                return $this->createSuccess($category);
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
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        if (Auth::user()->canUpdateCategory()) {
            $category_leads = CategoryLead::all();
            $quizzes = Quiz::orderBy('quiz', 'asc')->get();
            return View('category.edit', [
                'category' => $category,
                'category_leads' => $category_leads,
                'quizzes' => $quizzes
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //dd($request->all());
        if (Auth::user()->canUpdateCategory()) {
            $this->validate($request, [
                'category' => 'string|unique:categories,category,'.$category->uuid.',uuid',
                'quiz_uuid' => 'required'
            ]);
            try {
                DB::beginTransaction();

                $category->fill($request->all());
                $uuids = array_keys($request->input("weights"));
                $category_leads = CategoryLead::whereIn('uuid', $uuids)->get();
                $category_leads = $category_leads->mapWithKeys(function($item) use($request){
                    return [$item['uuid'] => ['weight' => $request->input('weights')[$item->uuid], 'price' => $request->input('prices')[$item->uuid]]];
                });
                $category->category_leads()->sync($category_leads->toArray());
                $this->updateRecord($category);

                DB::commit();
                return $this->updateSuccess($category);
            } catch (\Exception $e) {
                DB::rollback();
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        if (Auth::user()->canDeleteCategory()) {
            $category->category_leads()->detach();
            return $this->deleteRecord($category);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Get all categories assigned to a site
     */
    public function apiGetCategoriesBySite($uuid) {
        try {
            return $this->getApiResponse(Category::whereHas('sites', function($query) use ($uuid) {
                        $query->where('uuid', $uuid);
                    })->get()
            );
        } catch (\Exception $e) {
            return $this->getApiResponse($e, 'error');
        }
    }

    /**
     * Get all categories from vue
     *
     * @return Category[]
     */
    public function vueGetCategories() {
        try {
            return $this->getApiResponse(Category::orderBy('category', 'asc')->get());
        } catch (\Exception $e) {
            return $this->getApiResponse($e, 'error');
        }
    }
}
