@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New image', 
        'routeUrl' => route('image.store'), 
        'method' => 'POST',
        'fileUpload' => true,
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
        @section('formFields')
            <div class="mt-4 mb-4 card card-primary{{ $errors->has('image') ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    New Image
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'file',
                                        'field' => 'file',
                                        'label' => 'Image',
                                        'required' => true,
                                        'inputSize' => 4
                                    ],[
                                        'type' => 'text',
                                        'field' => 'width',
                                        'label' => 'Width',
                                        'required' => true,
                                        'inputSize' => 4
                                    ],[
                                        'type' => 'text',
                                        'field' => 'height',
                                        'label' => 'Height',
                                        'required' => true,
                                        'inputSize' => 4
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
                                        'inputSize' => 6
                                    ],[
                                        'type' => 'select',
                                        'field' => 'image_type_uuid',
                                        'label' => 'Image type',
                                        'required' => true,
                                        'items' => $image_types,
                                        'displayField' => 'type',
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,
                                        'defaultNone' => true,
                                        'inputSize' => 6
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