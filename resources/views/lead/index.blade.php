@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $leads, 
        'model' => 'lead',
        'tableTitle' => 'Lead',
        'displayField' => 'name',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection