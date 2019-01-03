@extends('layouts.app')

@section('content-no-app')
<div id="questions">
    @component('components.form', [
        'title' => 'Update Question', 
        'routeUrl' => route('question.update', $question->uuid), 
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
                        'field' => 'question',
                        'label' => 'Question',
                        'required' => true,
                        'inputValue' => $question->question
                    ]
                ]
            ])
            @endcomponent
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'hidden',
                        'field' => 'quiz_uuid',
                        'inputValue' => $question->quiz->uuid
                    ],
                    [
                            'type' => 'text',
                            'field' => 'quiz',
                            'label' => 'Quiz',
                            'required' => true,
                            'inputSize' => 4,
                            'disabled' => true,
                            'inputValue' => $question->quiz->quiz
                    ],
                    [
                        'type' => 'text',
                        'field' => 'field_name',
                        'label' => 'Field name',
                        'required' => true,
                        'inputSize' => 4,
                        'inputValue' => $question->field_name,
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
                        'disabled' => true,
                        'indexSelected' => $question->question_type_uuid,
                    ],
                ]
            ])
            @endcomponent
            <div class="form-group">
            <crudanswers 
                :returned-data="{{ $answers }}"
                :question-type-uuid="'{{ $question->question_type_uuid }}'" 
                :question-uuid="'{{ $question->uuid }}'">
            </crudanswers>
            </div>
        @endsection
    @endcomponent
</div>
@push('bottom-scripts')
    <script src="{{ asset('js/questions.js') }}"></script>
@endpush
@endsection