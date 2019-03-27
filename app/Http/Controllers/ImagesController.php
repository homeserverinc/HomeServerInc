<?php

namespace App\Http\Controllers;

use App\Image;
use App\ImageType;
use App\Category;
use Storage;
use Illuminate\Http\Request;
use App\traits\ApiResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\HomeServerController;

class ImagesController extends HomeServerController
{
    public $fields = [
        'file' => 'File',
        'width' => 'Width',
        'height' => 'Height',
        'image_type.type' => 'Type',
        'category.category' => 'Category',
        'created_at' => 'Created',
    ];

    public $path = 'public/sites/images';

    public $modelName = 'image';
    public $recordName = 'uuid';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadImage()) {
            if ($request->searchField) {
                    $images = Image::where('file', 'like', '%'.$request->searchField.'%')
                ->orWhere('created_at', 'like', '%'.$request->searchField.'%')
                ->orderBy('created_at')
                ->paginate();
                
            } else {
                $images = Image::orderBy('created_at')->paginate();
            }
        } else {
            return $this->accessDenied();
        }

        return View('image.index', [
            'fields' => $this->fields,
            'images' => $images
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateImage()) {
            return View('image.create', ['categories' => Category::all(), 'image_types' => ImageType::all()]);
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
        if (Auth::user()->canCreateImage()) {
            $this->validate($request, [
                'category_uuid' => 'required|exists:categories,uuid',
                'image_type_uuid' => 'required|exists:image_types,uuid',
                'width' => 'required|string',
                'height' => 'required|string',
                'file' => 'required|image',
            ]);

            try {
                DB::beginTransaction();
                $image = new Image();
                $path = $request->file('file')->store($this->path);
                $image->fill($request->all());
                $image->file = Storage::url($path);
                $image = $this->createRecord($image);
                DB::commit();

                return $image;
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
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        if (Auth::user()->canUpdateImage()) {
            
            return View('image.edit', ['image' => $image, 'categories' => Category::all(), 'image_types' => ImageType::all()]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        if (Auth::user()->canUpdateImage()) {
            $this->validate($request, [
                'category_uuid' => 'required|exists:categories,uuid',
                'image_type_uuid' => 'required|exists:image_types,uuid',
                'width' => 'required|string',
                'height' => 'required|string',
                'file' => 'required|image',
            ]);

            try {
                DB::beginTransaction();
                $path = $request->file('file')->store($this->path);
                $image->fill($request->all());
                $image->file = Storage::url($path);
                $image = $this->updateRecord($image);
                DB::commit();

                return $image;
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
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        if (Auth::user()->canDeleteImage()) {
            return $this->deleteRecord($image);
        } else {
            return $this->accessDenied();
        }
    }
}
