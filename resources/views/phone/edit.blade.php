@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Update Phone', 
            'routeUrl' => route('phone.update', $phone->id), 
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
                            'field' => 'sid',
                            'label' => 'Sid',
                            'inputSize' => 4,
                            'disabled' => true,
                            'inputValue' => $phone->sid
                        ],
                        [
                            'type' => 'text',
                            'field' => 'friendly_name',
                            'label' => 'Friendly Name',
                            'required' => true,
                            'inputSize' => 4,
                            'realOnly' => true,
                            'inputValue' => $phone->friendly_name
                        ],
                        [
                            'type' => 'text',
                            'field' => 'phone_number',
                            'label' => 'Phone Number',
                            'required' => true,
                            'inputSize' => 4,
                            'readOnly' => true,
                            'inputValue' => $phone->phone_number
                        ]
                    ]
                ])
                @endcomponent
                <div class="form-group">
                    <div class="card">
                        <div class="card-header"><strong>API Methods</strong></div>
                        <div class="card-body">
                        @component('components.form-group', [
                            'inputs' => [
                                [
                                    'type' => 'select',
                                    'field' => 'voice_method',
                                    'label' => 'Voice Method',
                                    'inputSize' => 2,
                                    'items' => [
                                        'GET' => 'GET',
                                        'POST' => 'POST'
                                    ],
                                    'indexSelected' => $phone->voice_method
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'voice_url',
                                    'label' => 'Voice URL',
                                    'inputSize' => 10,
                                    'inputValue' => $phone->voice_url
                                ]
                            ]
                        ])
                        @endcomponent
                        @component('components.form-group', [
                            'inputs' => [
                                [
                                    'type' => 'select',
                                    'field' => 'voice_fallback_method',
                                    'label' => 'Voice Fallback Method',
                                    'inputSize' => 2,
                                    'items' => [
                                        'GET' => 'GET',
                                        'POST' => 'POST'
                                    ],
                                    'indexSelected' => $phone->voice_fallback_method
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'voice_fallback_url',
                                    'label' => 'Voice Fallback URL',
                                    'inputSize' => 10,
                                    'inputValue' => $phone->voice_fallback_url
                                ]
                            ]
                        ])
                        @endcomponent
                        </div>
                    </div>
                </div>                
            @endsection
        @endcomponent
    </div>
@endsection