@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $sip_domains, 
        'model' => 'sip_domain',
        'tableTitle' => 'Sip Domain',
        'displayField' => 'friendly_name',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection