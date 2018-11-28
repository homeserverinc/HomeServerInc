@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $sipCredentialListSipDomains, 
        'model' => 'sip_credential_list_sip_domain',
        'tableTitle' => 'Sip Credential List vs Sip Domain',
        'displayField' => 'id',
        'actions' => ['destroy']
        ]);
    @endcomponent
@endsection