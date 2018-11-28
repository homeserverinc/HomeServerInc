@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $services, 
        'model' => 'service',
        'tableTitle' => 'Service',
        'displayField' => 'service_description',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection