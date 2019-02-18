@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $categories, 
        'model' => 'category',
        'tableTitle' => 'Category',
        'displayField' => 'category',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection