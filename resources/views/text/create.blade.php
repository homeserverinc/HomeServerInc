@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New Text', 
        'routeUrl' => route('text.store'), 
        'method' => 'POST',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
        @section('formFields')
            <div class="mt-4 mb-4 card card-primary{{ $errors->has('text') ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    Text
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'brief',
                                        'label' => 'Brief',
                                        'required' => true,
                                        'inputSize' => 12
                                    ],[
                                        'type' => 'textarea',
                                        'field' => 'fullText',
                                        'label' => 'Full Text',
                                        'required' => true,
                                        'inputSize' => 12
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
                                        'field' => 'text_type_uuid',
                                        'label' => 'Text types',
                                        'required' => true,
                                        'items' => $text_types,
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