@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New Twilio Activity', 
        'routeUrl' => route('twilio_activity.store'), 
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
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'select',
                        'field' => 'available',
                        'label' => 'Available',
                        'required' => true,
                        'inputSize' => 2,
                        'indexSelected' => 0,
                        'items' => Array('No', 'Yes'),
                    ],
                    [
                        'type' => 'select',
                        'field' => 'twilio_workspace_id',
                        'label' => 'Workspace',
                        'required' => true,
                        'items' => $twilioWorkspaces,
                        'inputSize' => 10,
                        'displayField' => 'friendly_name',
                        'keyField' => 'id',
                        'defaultNone' => true
                    ]
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection