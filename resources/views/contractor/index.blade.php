@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $contractors, 
        'model' => 'contractor',
        'tableTitle' => 'Contractor',
        'displayField' => 'name',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection