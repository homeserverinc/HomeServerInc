@extends('layouts.app')

@section('content-no-app')
<div id="questions">
    @component('components.form', [
        'title' => 'Update Question', 
        'routeUrl' => route('question.update', $question->id), 
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
                        'type' => 'text',
                        'field' => 'field_name',
                        'label' => 'Field name',
                        'required' => true,
                        'inputSize' => 6,
                        'inputValue' => $question->field_name,
                        'readOnly' => true
                    ],
                    [
                        'type' => 'select',
                        'field' => 'question_type_id',
                        'label' => 'Question type',
                        'required' => true,
                        'inputSize' => 6,
                        'defaultNone' => true,
                        'items' => $questionTypes,
                        'displayField' => 'question_type',
                        'keyField' => 'id',
                        'liveSearch' => true,
                        'disabled' => true,
                        'indexSelected' => $question->question_type_id,
                    ],
                ]
            ])
            @endcomponent
            <div class="form-group">
            <crudanswers 
                :question-type-id="{{ $question->question_type_id }}" 
                :question-type-id="questionTypeId" 
                :returned-data="{{ $answers }}"
                :question-id="{{ $question->id }}">
            </crudanswers>
            </div>
        @endsection
    @endcomponent
</div>
@push('bottom-scripts')
    <script src="{{ asset('js/questions.js') }}"></script>
@endpush
@endsection