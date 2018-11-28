@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $agents, 
        'model' => 'agent',
        'tableTitle' => 'Agent',
        'displayField' => 'id',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection