@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $recordings, 
        'model' => 'recording',
        'tableTitle' => 'Recording',
        'displayField' => 'recording_create_at',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection