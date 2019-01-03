@extends('layouts.app')

@section('content')
    <div class="card">
        @component('components.form', [
            'title' => 'New Quiz', 
            'routeUrl' => route('quiz.store'), 
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
                            'field' => 'quiz',
                            'label' => 'Quiz',
                            'required' => true,
                            'inputSize' => 8
                        ],
                        [
                            'type' => 'select',
                            'field' => 'category_uuid',
                            'label' => 'Category',
                            'required' => true,
                            'items' => $categories,
                            'inputSize' => 4,
                            'displayField' => 'category',
                            'keyField' => 'uuid',
                            'liveSearch' => true,
                            'defaultNone' => true
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection