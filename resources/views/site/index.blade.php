@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $sites, 
        'model' => 'site',
        'tableTitle' => 'Site',
        'displayField' => 'name',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection