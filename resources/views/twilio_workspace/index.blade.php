@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $twilio_workspaces, 
        'model' => 'twilio_workspace',
        'tableTitle' => 'Twilio Workspaces',
        'displayField' => 'friendly_name',
        'actions' => ['edit', 'destroy'],
        'customMethods' => [
            [
                'component' => 'components.customMethods.import_twilio_workspaces'
            ]
        ]]);
    @endcomponent
@endsection