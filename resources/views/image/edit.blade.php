@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change image', 
        'routeUrl' => route('image.update', $image->uuid), 
        'method' => 'PUT',
        'fileUpload' => true,
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
       @section('formFields')
           <div class="mt-4 mb-4 card card-primary{{ $errors->has('image')  ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    Change image
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <img src="{{$image->file}}" width="300"/>
                            @component('components.form-group', [
                                'inputs' => [
                                     [
                                        'type' => 'file',
                                        'field' => 'file',
                                        'label' => 'Image',
                                        'required' => true,
                                        'inputSize' => 12
                                    ],[
                                        'type' => 'text',
                                        'field' => 'width',
                                        'label' => 'Width',
                                        'required' => true,
                                        'inputSize' => 4,
                                        'inputValue' => $image->width
                                    ],[
                                        'type' => 'text',
                                        'field' => 'height',
                                        'label' => 'Height',
                                        'required' => true,
                                        'inputSize' => 4,
                                        'inputValue' => $image->height
                                    ],[
                                        'type' => 'select',
                                        'field' => 'category_uuid',
                                        'label' => 'Categories',
                                        'required' => true,
                                        'items' => $categories,
                                        'displayField' => 'category',
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,
                                        'defaultNone' => true,
                                        'inputSize' => 6,
                                        'indexSelected' => $image->category_uuid,
                                    ],[
                                        'type' => 'select',
                                        'field' => 'image_type_uuid',
                                        'label' => 'image types',
                                        'required' => true,
                                        'items' => $image_types,
                                        'displayField' => 'type',
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,
                                        'defaultNone' => true,
                                        'inputSize' => 6,
                                        'indexSelected' => $image->image_type_uuid,
                                    ]
                                ]
                            ])
                            @endcomponent
                        </div>
                    </div>
                </div>
            </div>
        @endsection
    @endcomponent
@endsection