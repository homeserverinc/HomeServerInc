@extends('layouts.app')

@section('content-no-app')
<div id="questions">
    <div class="panel panel-default">
        @component('components.form', [
            'title' => 'New Question', 
            'routeUrl' => route('question.store'), 
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
                            'field' => 'question',
                            'label' => 'Question',
                            'required' => true,
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'select',
                            'field' => 'quiz_uuid',
                            'label' => 'Quiz',
                            'required' => true,
                            'inputSize' => 4,
                            'defaultNone' => true,
                            'items' => $quizzes,
                            'displayField' => 'quiz',
                            'keyField' => 'uuid',
                            'liveSearch' => true,
                            'vModel' => 'quizUuid'
                        ],
                        [
                            'type' => 'text',
                            'field' => 'field_name',
                            'label' => 'Field name',
                            'required' => true,
                            'inputSize' => 4,
                            'readOnly' => true
                        ],
                        [
                            'type' => 'select',
                            'field' => 'question_type_uuid',
                            'label' => 'Question type',
                            'required' => true,
                            'inputSize' => 4,
                            'defaultNone' => true,
                            'items' => $questionTypes,
                            'displayField' => 'question_type',
                            'keyField' => 'uuid',
                            'liveSearch' => true,
                            'vModel' => 'questionTypeUuid'
                        ]
                    ]
                ])
                @endcomponent
                <div class="form-group">
                <crudanswers 
                    :question-type-uuid="questionTypeUuid" 
                    :quiz-uuid="quizUuid"
                    :returned-data="{{ json_encode(old('answers')) }}">
                </crudanswers>
                </div>
            @endsection
        @endcomponent
    </div>
</div>
@push('bottom-scripts')
    <script src="{{ asset('js/questions.js') }}"></script>
@endpush
@endsection