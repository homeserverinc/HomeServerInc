@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $clientes, 
        'model' => 'cliente',
        'tableTitle' => 'Clientes',
        'displayField' => 'nome_razao',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection