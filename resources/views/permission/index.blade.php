@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $permissions, 
        'model' => 'permission',
        'tableTitle' => 'Permission',
        'displayField' => 'display_name',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection