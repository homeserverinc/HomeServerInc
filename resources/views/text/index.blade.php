@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $texts, 
        'model' => 'text',
        'tableTitle' => 'Texts',
        'displayField' => 'brief',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection