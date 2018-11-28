@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Update Twilio Workspace', 
        'routeUrl' => route('twilio_workspace.update', $twilioWorkspace->id), 
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
                        'inputValue' => $twilioWorkspace->friendly_name
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
                        'inputValue' => $twilioWorkspace->sid
                    ],
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection