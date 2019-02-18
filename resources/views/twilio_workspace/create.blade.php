@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New Twilio Workspace', 
        'routeUrl' => route('twilio_workspace.store'), 
        'method' => 'POST',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
        @section('formFields')
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'text',
                        'field' => 'friendly_name',
                        'label' => 'Friendly Name',
                    ],
                ]
            ])
            @endcomponent
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'text',
                        'field' => 'sid',
                        'label' => 'Sid',
                    ],
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection