@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $missedCalls, 
        'model' => 'missed_call',
        'tableTitle' => 'Missed Call',
        'displayField' => 'missed_call',
        'actions' => ['edit']
        ]);
    @endcomponent
@endsection