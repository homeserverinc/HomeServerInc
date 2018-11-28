@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $sip_credential_lists, 
        'model' => 'sip_credential_list',
        'tableTitle' => 'Sip Credential List',
        'displayField' => 'friendly_name',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection