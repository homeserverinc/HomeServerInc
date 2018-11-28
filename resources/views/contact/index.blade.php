@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $contacts, 
        'model' => 'contact',
        'tableTitle' => 'Contact',
        'displayField' => 'name',
        'actions' => [
            [
                'custom_action' => 'components.customActions.contact-make-lead'
            ]
        ]
        ]);
    @endcomponent
@endsection