@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $callroutes, 
        'model' => 'callroute',
        'tableTitle' => 'Call Route',
        'displayField' => 'description',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection