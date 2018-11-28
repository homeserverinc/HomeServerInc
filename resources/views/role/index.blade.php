@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $roles, 
        'model' => 'role',
        'tableTitle' => 'Role',
        'displayField' => 'display_name',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection