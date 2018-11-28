@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $questions, 
        'model' => 'question',
        'tableTitle' => 'Question',
        'displayField' => 'question',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection