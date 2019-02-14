@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Update Sip Credential', 
            'routeUrl' => route('sip_credential.update', $sipCredential->id), 
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
                            'type' => 'select',
                            'field' => 'sip_credential_list_id',
                            'label' => 'Credential List',
                            'required' => true,
                            'inputSize' => 12,
                            'items' => $sip_credential_lists,
                            'displayField' => 'friendly_name',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'indexSelected' => $sipCredential->sip_credential_list_id
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
                            'inputSize' => 4,
                            'inputValue' => $sipCredential->username,
                            'readOnly' => true
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
    </div>
@endsection