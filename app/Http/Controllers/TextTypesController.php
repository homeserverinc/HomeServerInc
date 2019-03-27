<?php

namespace App\Http\Controllers;

use App\TextType;
use Illuminate\Http\Request;
use App\traits\ApiResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\HomeServerController;

class TextTypesController extends HomeServerController
{
    public $fields = [
        'type' => 'Tipo',
        'created_at' => 'Created',
    ];

    public $modelName = 'text_type';
    public $recordName = 'uuid';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadTextType()) {
            if ($request->searchField) {
                    $text_types = TextType::where('type', 'like', '%'.$request->searchField.'%')
                ->orderBy('created_at', 'type')
                ->paginate();
                
            } else {
                $text_types = TextType::orderBy('created_at', 'type')->paginate();
            }
        } else {
            return $this->accessDenied();
        }

        return View('text_type.index', [
            'fields' => $this->fields,
            'text_types' => $text_types
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateTextType()) {
            return View('text_type.create');
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
        if (Auth::user()->canCreateCard()) {
            $this->validate($request, [
                'type' => 'required|string',
            ]);

            try {
                DB::beginTransaction();
                $textType = new TextType();
                $textType->fill($request->all());

                $textType = $this->createRecord($textType);
                DB::commit();

                return $textType;
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
     * @param  \App\TextType  $textType
     * @return \Illuminate\Http\Response
     */
    public function edit(TextType $textType)
    {
        if (Auth::user()->canUpdateTextType()) {
            
            return View('text_type.edit', ['text_type' => $textType]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TextType  $textType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TextType $textType)
    {
        if (Auth::user()->canUpdateTextType()) {
            $this->validate($request, [
                'type' => 'required|string',
            ]);

            try {
                DB::beginTransaction();
                $textType->fill($request->all());

                $textType = $this->createRecord($textType);
                DB::commit();

                return $textType;
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
     * @param  \App\TextType  $textType
     * @return \Illuminate\Http\Response
     */
    public function destroy(TextType $textType)
    {
        if (Auth::user()->canDeleteTextType()) {
            
            return $this->deleteRecord($textType);
        } else {
            return $this->accessDenied();
        }
    }
}
