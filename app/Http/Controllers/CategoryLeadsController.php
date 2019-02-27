<?php

namespace App\Http\Controllers;

use App\CategoryLead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeServerController;

class CategoryLeadsController extends HomeServerController
{
    public $fields = [
        'uuid' => 'UUID',
        'name' => 'Name',
    ];

    protected $modelName = 'category_lead';
    protected $recordName = 'name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadCategoryLead()) {
            if ($request->searchField) {
                $categories = CategoryLead::where('name', 'like', '%'.$request->searchField.'%')
                                ->paginate();
            } else {
                $categories = CategoryLead::paginate();
            }

            return View('category_lead.index', [
                'category_leads' => $categories,
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
        if (Auth::user()->canCreateCategoryLead()) {
            return View('category_lead.create');
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
        if (Auth::user()->canCreateCategoryLead()) {
            $this->validate($request, [
                'name' => 'string|unique:category_leads'
            ]);

            try {
                $category_lead = new CategoryLead($request->all());
            
                return $this->createRecord($category_lead);
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
     * @param  \App\CategoryLead  $categoryLead
     * @return \Illuminate\Http\Response
     */
    public function edit(CategoryLead $categoryLead)
    {
        if (Auth::user()->canUpdateCategoryLead()) {
            return View('category_lead.edit', [
                'category_lead' => $categoryLead
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CategoryLead  $categoryLead
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CategoryLead $categoryLead)
    {
        if (Auth::user()->canUpdateCategoryLead()) {
            try {
                $categoryLead->fill($request->all());

                return $this->updateRecord($categoryLead);
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
     * @param  \App\CategoryLead  $categoryLead
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryLead $categoryLead)
    {
        if (Auth::user()->canDeleteCategoryLead()) {
            $categoryLead->categories()->detach();
            return $this->deleteRecord($categoryLead);
        } else {
            return $this->accessDenied();
        }
    }
}
