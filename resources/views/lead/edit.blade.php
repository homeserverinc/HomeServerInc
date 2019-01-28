@extends('layouts.edit_no_app')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change Lead', 
        'routeUrl' => route('lead.update', $lead->uuid), 
        'method' => 'PUT',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
        @section('formFields')
            {{--  customer information  --}}
            <div class=" card  ">
                <div class="card-header">
                    <strong>CUSTOMER</strong>
                </div>
                <div class="card-body">
                    @component('components.form-group', [
                        'inputs' => [
                            [
                                'type' => 'text',
                                'field' => 'customer',
                                'label' => 'First name',
                                'required' => true,
                                'inputSize' => 6,
                                'inputValue' => $lead->customer->first_name
                            ],
                            [
                                'type' => 'text',
                                'field' => 'last_name',
                                'label' => 'Last name',
                                'required' => true,
                                'inputSize' => 6,
                                'inputValue' => $lead->customer->last_name
                            ],
                            [
                                'type' => 'hidden',
                                'field' => 'customer_uuid',
                                'inputValue' => $lead->customer_uuid
                            ]
                        ]
                    ])
                    @endcomponent
                    <div class=" card  ">
                        <div class="card-header">
                            <strong>Address</strong>
                        </div>
                        <div class="card-body">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'street',
                                        'label' => 'Street',
                                        'required' => true,
                                        'inputValue' => $lead->customer->street
                                    ]
                                ]
                            ])
                            @endcomponent
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'city',
                                        'label' => 'City',
                                        'required' => true,
                                        'inputSize' => 8,
                                        'inputValue' => $lead->customer->city
                                    ],
                                    [
                                        'type' => 'text',
                                        'field' => 'state',
                                        'label' => 'State',
                                        'required' => true,
                                        'inputSize' => 2,
                                        'inputValue' => $lead->customer->state
                                    ],
                                    [
                                        'type' => 'text',
                                        'field' => 'zip',
                                        'label' => 'Zip',
                                        'required' => true,
                                        'inputSize' => 2,
                                        'inputValue' => $lead->customer->zip
                                    ]
                                ]
                            ])
                            @endcomponent
                        </div>
                    </div>   
                    <div class=" card  ">
                        <div class="card-header">
                            <strong>Contacts</strong>
                        </div>
                        <div class="card-body"> 
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'phone1',
                                        'label' => 'Phone (Primary)',
                                        'inputSize' => 6,
                                        'required' => true,
                                        'inputValue' => $lead->customer->phone1
                                    ],
                                    [
                                        'type' => 'text',
                                        'field' => 'phone2',
                                        'label' => 'Phone (Secondary)',
                                        'inputSize' => 6,
                                        'inputValue' => $lead->customer->phone2
                                    ]
                                ]
                            ])
                            @endcomponent
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'email1',
                                        'label' => 'E-mail (Primary)',
                                        'inputSize' => 6,
                                        'required' => true,
                                        'inputValue' => $lead->customer->email1
                                    ],
                                    [
                                        'type' => 'text',
                                        'field' => 'email2',
                                        'label' => 'E-mail (Secondary)',
                                        'inputSize' => 6,
                                        'inputValue' => $lead->customer->email2
                                    ]
                                ]
                            ])
                            @endcomponent
                        </div>
                    </div>
                </div>
            </div>
            {{--  end customer information  --}}
            {{--  begin lead information  --}}
            <div class=" card  ">
                <div class="card-header">
                    <strong>Lead Information</strong>
                </div>
                <div class="card-body"> 
                    @component('components.form-group', [
                        'inputs' => [
                            [
                                'type' => 'textarea',
                                'field' => 'project_details',
                                'label' => 'Project Details',
                                'inputValue' => $lead->project_details
                            ]
                        ]
                    ])
                    @endcomponent
                    @component('components.form-group', [
                        'inputs' => [
                            [
                                'type' => 'select',
                                'field' => 'deadline',
                                'label' => 'Deadline',
                                'items' => [
                                    'im-flexible' => 'Im flexible', 
                                    'within-48-hours' => 'Within 48 hours',
                                    'within-a-week' => 'Within a week',
                                    'within-a-month' => 'Within a month',
                                    'within-a-year' => 'Within a year'],
                                'indexSelected' => $lead->deadline,
                                'inputSize' => 6
                            ],
                            [
                                'type' => 'select',
                                'field' => 'service_uuid',
                                'label' => 'Service',
                                'items' => $services,
                                'displayField' => 'service_description',
                                'keyField' => 'uuid',
                                'disabled' => true, 
                                'inputSize' => 6,
                                'indexSelected' => $lead->service_uuid                            
                            ]
                        ]
                    ])
                    @endcomponent
                </div>
            </div>
            {{--  end lead information  --}}
            {{--  begin quiz  --}}
            <div id="quiz-component">
                <hs-quiz></hs-quiz>
            </div>
            {{--  end quiz  --}}
        @endsection
    @endcomponent
@endsection
@push('bottom-scripts')
    <script src="{{ asset('js/quiz.js') }}"></script>
@endpush

