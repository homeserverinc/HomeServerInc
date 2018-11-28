@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change Service', 
        'routeUrl' => route('service.update', $service->id), 
        'method' => 'PUT',
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
                        'inputValue' => $service->service_description
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
                        'disabled' => true,
                        'indexSelected' => $service->category_id
                    ]                 
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
                        'inputSize' => 12,
                        'displayField' => 'question',
                        'keyField' => 'id',
                        'defaultNone' => true,
                        'indexSelected' => $service->question_id
                    ]
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection