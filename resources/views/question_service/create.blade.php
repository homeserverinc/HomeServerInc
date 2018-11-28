@extends('layouts.app')

@section('content')
    <div class="panel panel-default">
        @component('components.form', [
            'title' => 'New Service vs Question', 
            'routeUrl' => route('question_service.store'), 
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
                            'type' => 'select',
                            'field' => 'service_id',
                            'label' => 'Service',
                            'required' => true,
                            'items' => $services,
                            'inputSize' => 4,
                            'displayField' => 'service_description',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'defaultNone' => true,
                        ],
                        [
                            'type' => 'select',
                            'field' => 'question_id',
                            'label' => 'Question',
                            'required' => true,
                            'items' => $questions,
                            'inputSize' => 8,
                            'displayField' => 'question',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'defaultNone' => true,
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection