@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Change Quiz', 
            'routeUrl' => route('quiz.update', $quiz->uuid), 
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
                            'field' => 'quiz',
                            'label' => 'Quiz',
                            'required' => true,
                            'inputSize' => 8,
                            'inputValue' => $quiz->quiz
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
                            'indexSelected' => $quiz->category_uuid
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'select',
                            'field' => 'first_question_uuid',
                            'label' => 'First Question',
                            'required' => true,
                            'items' => $questions,                            
                            'displayField' => 'question',
                            'keyField' => 'uuid',
                            'liveSearch' => true,
                            'defaultNone' => true,
                            'indexSelected' => $quiz->first_question_uuid
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection