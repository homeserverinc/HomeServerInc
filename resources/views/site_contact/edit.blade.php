@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Update Site Contact', 
            'routeUrl' => route('site_contact.update', $siteContact->uuid), 
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
                            'inputValue' => $siteContact->name,
                            'readOnly' => true
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'text',
                            'field' => 'phone',
                            'label' => 'Phone',
                            'inputSize' => 6,
                            'inputValue' => $siteContact->phone,
                            'readOnly' => true
                        ],
                        [
                            'type' => 'text',
                            'field' => 'email',
                            'label' => 'E-mail',
                            'inputSize' => 6,
                            'inputValue' => $siteContact->email,
                            'readOnly' => true
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'select',
                            'field' => 'contact_type_preference',
                            'label' => 'Contact Type Preference',
                            'inputSize' => 5,
                            'items' => [
                                'email' => 'E-mail',
                                'phone' => 'Phone'
                            ],
                            'disabled' => true,
                            'indexSelected' => $siteContact->contact_type_preference
                        ],
                        [
                            'type' => 'select',
                            'field' => 'contact_time_preference',
                            'label' => 'Contact Time Preference',
                            'inputSize' => 5,
                            'items' => [
                                'morning' => 'Morning',
                                'afternoon' => 'Afternoon',
                                'evening' => 'Evening'
                            ],
                            'disabled' => true,
                            'indexSelected' => $siteContact->contact_time_preference
                        ],
                        [
                            'type' => 'select',
                            'field' => 'contacted',
                            'label' => 'Contacted',
                            'inputSize' => 2,
                            'items' => ['No', 'Yes'],
                            'indexSelected' => $siteContact->contacted
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'textarea',
                            'field' => 'message',
                            'label' => 'Message',
                            'readOnly' => true,
                            'inputValue' => $siteContact->message
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection