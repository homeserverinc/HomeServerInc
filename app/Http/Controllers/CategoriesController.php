<?php

namespace App\Http\Controllers;

use App\Site;
use App\Category;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
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
                $categories = Category::where('category', 'like', '%'.$request->searchField.'%')
                                ->paginate();
            } else {
                $categories = Category::paginate();
            }

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
            return View('category.create');
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
                'category' => 'string|unique:categories'
            ]);

            try {
                $category = new Category($request->all());
            
                return $this->createRecord($category);
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
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        if (Auth::user()->canUpdateCategory()) {
            return View('category.edit', [
                'category' => $category
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
        if (Auth::user()->canUpdateCategory()) {
            try {
                $category->fill($request->all());

                return $this->updateRecord($category);
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
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        if (Auth::user()->canDeleteCategory()) {
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
