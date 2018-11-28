@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'New Service', 
        'routeUrl' => route('service.store'), 
        'method' => 'POST',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
        @section('formFields')
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'text',
                        'field' => 'service_description',
                        'label' => 'Description',
                        'inputSize' => 6,
                        'required' => true,
                    ],
                    [
                        'type' => 'select',
                        'field' => 'category_id',
                        'label' => 'Category',
                        'required' => true,
                        'items' => $categories,
                        'inputSize' => 6,
                        'displayField' => 'category',
                        'keyField' => 'id',
                        'defaultNone' => true,
                        'liveSearch' => true
                    ],
                ]
            ])
            @endcomponent
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'select',
                        'field' => 'question_id',
                        'label' => 'First Question',
                        'required' => true,
                        'items' => $questions,
                        'displayField' => 'question',
                        'keyField' => 'id',
                        'defaultNone' => true,
                        'liveSearch' => true
                    ]                  
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection