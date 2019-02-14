@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New User', 
        'routeUrl' => route('user.store'), 
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
                        'field' => 'name',
                        'label' => 'Name',
                        'required' => true,
                        'inputSize' => 6
                    ],
                    [
                        'type' => 'text',
                        'field' => 'email',
                        'label' => 'E-mail',
                        'required' => true,
                        'inputSize' => 6
                    ]
                ]
            ])
            @endcomponent
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'select',
                        'field' => 'role_id',
                        'label' => 'Profile',
                        'required' => true,
                        'items' => $roles,
                        'inputSize' => 4,
                        'displayField' => 'display_name',
                        'keyField' => 'id',
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