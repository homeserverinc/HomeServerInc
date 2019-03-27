<?php

namespace App\Http\Controllers;

use App\ImageType;
use Illuminate\Http\Request;
use App\traits\ApiResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\HomeServerController;

class ImageTypesController extends HomeServerController
{
    public $fields = [
        'type' => 'Type',
        'created_at' => 'Created',
    ];

    public $modelName = 'image_type';
    public $recordName = 'uuid';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadImageType()) {
            if ($request->searchField) {
                    $imagetypes = ImageType::where('type', 'like', '%'.$request->searchField.'%')
                ->orWhere('created_at', 'like', '%'.$request->searchField.'%')
                ->orderBy('created_at')
                ->paginate();
                
            } else {
                $imagetypes = ImageType::orderBy('created_at')->paginate();
            }
        } else {
            return $this->accessDenied();
        }

        return View('image_type.index', [
            'fields' => $this->fields,
            'image_types' => $imagetypes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateImageType()) {
            return View('image_type.create');
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
        if (Auth::user()->canCreateImageType()) {
            $this->validate($request, [
                'type' => 'required|string',
            ]);

            try {
                DB::beginTransaction();
                $imagetype = new ImageType();
                $imagetype->fill($request->all());

                $imagetype = $this->createRecord($imagetype);
                DB::commit();

                return $imagetype;
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
     * @param  \App\ImageType  $imagetype
     * @return \Illuminate\Http\Response
     */
    public function edit(ImageType $image_type)
    {
        if (Auth::user()->canUpdateImageType()) {
            return View('image_type.edit', ['image_type' => $image_type]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ImageType  $imagetype
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ImageType $image_type)
    {
        if (Auth::user()->canUpdateImageType()) {
            $this->validate($request, [
                'type' => 'required|string',
            ]);

            try {
                DB::beginTransaction();
                $image_type->fill($request->all());
                $image_type = $this->updateRecord($image_type);
                DB::commit();

                return $image_type;
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
     * @param  \App\ImageType  $imagetype
     * @return \Illuminate\Http\Response
     */
    public function destroy(ImageType $image_type)
    {
        if (Auth::user()->canDeleteImageType()) {
            return $this->deleteRecord($image_type);
        } else {
            return $this->accessDenied();
        }
    }
}
