@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $category_leads, 
        'model' => 'category_lead',
        'tableTitle' => 'Category Leads',
        'displayField' => 'name',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy']
    ]);
    @endcomponent
@endsection