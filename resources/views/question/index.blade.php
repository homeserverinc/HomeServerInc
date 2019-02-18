@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $questions, 
        'model' => 'question',
        'tableTitle' => 'Question',
        'displayField' => 'question',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy'],
        'searchParms' => [
                'view' => 'question.search_questions',
                'data' => $quizzes
            ]
        ]);
    @endcomponent
@endsection