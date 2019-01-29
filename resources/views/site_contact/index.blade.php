@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $site_contacts, 
        'model' => 'site_contact',
        'tableTitle' => 'Site Contact',
        'displayField' => 'name',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection