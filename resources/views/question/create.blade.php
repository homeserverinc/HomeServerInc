@extends('layouts.app')

@section('content-no-app')
@if(old('answers'))
    {{--  {{json_encode(old('answers'))}}  --}}
@endif
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
                            'type' => 'text',
                            'field' => 'field_name',
                            'label' => 'Field name',
                            'required' => true,
                            'inputSize' => 6,
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
                            'vModel' => 'questionTypeId'
                        ],
                    ]
                ])
                @endcomponent
                <div class="form-group">
                <crudanswers 
                    v-bind:question-type-id="questionTypeId" 
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