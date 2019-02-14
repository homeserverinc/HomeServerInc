@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $twilioWorkflows, 
        'model' => 'twilio_workflow',
        'tableTitle' => 'Twilio Workflows',
        'displayField' => 'friendly_name',
        'actions' => ['edit'],
        'customMethods' => [
            [
                'component' => 'components.customMethods.import_twilio_workflows'
            ]
        ]]);
    @endcomponent
@endsection