@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $quizzes, 
        'model' => 'quiz',
        'tableTitle' => 'Quiz',
        'displayField' => 'quiz',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection