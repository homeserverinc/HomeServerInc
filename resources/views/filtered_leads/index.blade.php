@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $filtered_leads, 
        'model' => 'lead',
        'tableTitle' => 'Leads filtered',
        'displayField' => 'reason',
        'keyField' => 'lead.uuid',
        'actions' => ['edit']
        ]);
    @endcomponent
@endsection