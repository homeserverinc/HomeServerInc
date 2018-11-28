@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New Sip Credential', 
        'routeUrl' => route('sip_credential.store'), 
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
                        'type' => 'select',
                        'field' => 'sip_credential_list_id',
                        'label' => 'Credential List',
                        'required' => true,
                        'inputSize' => 12,
                        'items' => $sip_credential_lists,
                        'displayField' => 'friendly_name',
                        'keyField' => 'id',
                        'liveSearch' => true

                    ]
                ]
            ])
            @endcomponent
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'text',
                        'field' => 'username',
                        'label' => 'Username',
                        'inputSize' => 4
                    ],
                    [
                        'type' => 'password',
                        'field' => 'password',
                        'label' => 'Password',
                        'required' => true,
                        'inputSize' => 4
                    ],
                    [
                        'type' => 'password',
                        'field' => 'password_confirmation',
                        'label' => 'Confirmation',
                        'required' => true,
                        'inputSize' => 4
                    ],
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection