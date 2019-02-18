@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $cities, 
        'model' => 'city',
        'tableTitle' => 'City',
        'displayField' => 'city',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection