@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $propertyServices, 
        'model' => 'property_service',
        'tableTitle' => 'Service Properties',
        'displayField' => 'id',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection