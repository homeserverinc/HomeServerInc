@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $leads, 
        'model' => 'lead',
        'tableTitle' => 'Lead',
        'displayField' => 'first_name',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection