@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Change User Password', 
            'routeUrl' => route('user.change.password', $user->id), 
            'cancelRoute' => 'user.profile',
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
                            'disabled' => true,
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
                            'type' => 'password',
                            'field' => 'current_password',
                            'label' => 'Current password',
                            'inputSize' => 4
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
    </div>
@endsection