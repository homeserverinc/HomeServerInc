<?php

namespace App\Http\Controllers;

use App\Text;
use App\TextType;
use App\Category;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\HomeServerController;

class TextsController extends HomeServerController
{
    public $fields = [
        'category.category' => 'Category',
        'text_type.type' => 'Type',
        'brief' => 'Brief',
        'created_at' => 'Created',
    ];

    public $modelName = 'text';
    public $recordName = 'uuid';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadText()) {
            if ($request->searchField) {
                    $texts = Text::where('brief', 'like', '%'.$request->searchField.'%')
                ->orWhere('fullText', 'like', '%'.$request->searchField.'%')
                ->orWhere('created_at', 'like', '%'.$request->searchField.'%')
                ->orderBy('created_at')
                ->paginate();
                
            } else {
                $texts = Text::orderBy('created_at')->paginate();
            }
        } else {
            return $this->accessDenied();
        }

        return View('text.index', [
            'fields' => $this->fields,
            'texts' => $texts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateText()) {
            return View('text.create', ['categories' => Category::all(), 'text_types' => TextType::all()]);
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
        if (Auth::user()->canCreateText()) {
            $this->validate($request, [
                'category_uuid' => 'required|exists:categories,uuid',
                'text_type_uuid' => 'required|exists:text_types,uuid',
                'brief' => 'required|string',
                'fullText' => 'required|string',
            ]);

            try {
                DB::beginTransaction();
                $text = new Text();
                $text->fill($request->all());

                $text = $this->createRecord($text);
                DB::commit();

                return $text;
            } catch (\Exception $e) {
                return $this->doOnException($e);
            }
        } else {
            DB::rollback();
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Text  $text
     * @return \Illuminate\Http\Response
     */
    public function edit(Text $text)
    {
        if (Auth::user()->canUpdateText()) {
            
            return View('text.edit', ['text' => $text, 'categories' => Category::all(), 'text_types' => TextType::all()]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Text  $text
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Text $text)
    {
        if (Auth::user()->canUpdateText()) {
            $this->validate($request, [
                'category_uuid' => 'required|exists:categories,uuid',
                'text_type_uuid' => 'required|exists:text_types,uuid',
                'brief' => 'required|string',
                'fullText' => 'required|string',
            ]);

            try {
                DB::beginTransaction();
                $text->fill($request->all());
                $text = $this->updateRecord($text);
                DB::commit();

                return $text;
            } catch (\Exception $e) {
                return $this->doOnException($e);
            }
        } else {
            DB::rollback();
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Text  $text
     * @return \Illuminate\Http\Response
     */
    public function destroy(Text $text)
    {
        if (Auth::user()->canDeleteText()) {
            
            return $this->deleteRecord($text);
        } else {
            return $this->accessDenied();
        }
    }
}
