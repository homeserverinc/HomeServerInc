@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Update Twilio Activity', 
        'routeUrl' => route('twilio_activity.update', $twilioActivity->id), 
        'method' => 'PUT',
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
                        'inputValue' => $twilioActivity->friendly_name
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
                        'inputValue' => $twilioActivity->sid
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
                        'indexSelected' => $twilioActivity->available
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
                        'defaultNone' => true,
                        'indexSelected' => $twilioActivity->twilio_workspace_id
                    ]
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection