@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change User', 
        'routeUrl' => route('user.update', $user->id), 
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
                        'field' => 'name',
                        'label' => 'Name',
                        'required' => true,
                        'inputSize' => 6,
                        'inputValue' => $user->name
                    ],
                    [
                        'type' => 'text',
                        'field' => 'email',
                        'label' => 'E-mail',
                        'required' => true,
                        'disabled' => true,
                        'inputSize' => 6,
                        'inputValue' => $user->email
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
                        'indexSelected' => $user->roles()->first()->id
                    ],
                    [
                        'type' => 'password',
                        'field' => 'password',
                        'label' => 'Password',
                        'inputSize' => 4
                    ], 
                    [
                        'type' => 'password',
                        'field' => 'password_confirmation',
                        'label' => 'Confirmation',
                        'inputSize' => 4
                    ],
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection