@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $properties, 
        'model' => 'property',
        'tableTitle' => 'Property',
        'displayField' => 'property_label',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection