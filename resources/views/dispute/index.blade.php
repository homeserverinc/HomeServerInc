@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $disputes, 
        'model' => 'dispute',
        'tableTitle' => 'Disputes',
        'displayField' => 'reason',
        'keyField' => 'uuid',
        'actions' => []
        ]);
    @endcomponent
@endsection