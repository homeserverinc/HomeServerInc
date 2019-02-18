@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $twilio_activities, 
        'model' => 'twilio_activity',
        'tableTitle' => 'Twilio Activities',
        'displayField' => 'activity_friendly_name',
        'actions' => ['edit', 'destroy'],
        'customMethods' => [
            [
                'component' => 'components.customMethods.import_twilio_activities'
            ]
        ]
        ]);
    @endcomponent
@endsection