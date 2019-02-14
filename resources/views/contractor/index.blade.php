@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'keyField' => 'uuid',
        'rows' => $contractors, 
        'model' => 'contractor',
        'tableTitle' => 'Contractor',
        'displayField' => 'company',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection