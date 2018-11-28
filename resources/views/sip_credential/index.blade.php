@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $sip_credentials, 
        'model' => 'sip_credential',
        'tableTitle' => 'Sip Credential',
        'displayField' => 'username',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection