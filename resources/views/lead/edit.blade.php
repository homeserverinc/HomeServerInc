@extends('layouts.app')


@push('assets-css')
    <link href="{{ asset('css/hs_leads_form.css') }}" rel="stylesheet" media="all">
@endpush

@section('content-no-app')
{{--  {{json_decode(json_encode($lead->questions))}}  --}}
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
        <div class="row">
            <div class="col-md-6">
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
                                    'field' => 'first_name',
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
                        <div class="card">
                            <div class="card-header">
                                <strong>Address</strong>
                            </div>
                            <div class="card-body">
                                @component('components.form-group', [
                                    'inputs' => [
                                        [
                                            'type' => 'text',
                                            'field' => 'street',
                                            'label' => 'Address',
                                            'required' => true,
                                            'inputSize' => 9,
                                            'inputValue' => $lead->customer->street
                                        ], [
                                            'type' => 'text',
                                            'field' => 'zipcode',
                                            'label' => 'Zip',
                                            'required' => true,
                                            'inputSize' => 3,
                                            'inputValue' => $lead->customer->zip
                                        ]
                                ]
                                ])
                                @endcomponent
                                
                            </div>
                        </div>   
                        <div class="card mt-3">
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
                
                {{--  end lead information  --}}
                {{--  begin quiz  --}}
                <div id="quiz-component">
                    <hs-quiz></hs-quiz>
                </div>
                {{--  end quiz  --}}
            </div>
            <div class="col-md-6">
                <div id="hs-quiz-placeholder">
                    <hs-quiz-form
                    suffix-theme="light"
                    lead-uuid="{{$lead->uuid}}">
                    </hs-quiz-form>
                    <input type="hidden" name="questions" ref="leadQuestions" id="leadQuestions" value="{{$lead->questions}}">
                    <input type="hidden" name="category_uuid" ref="categoryUuid" id="categoryUuid" value="{{$lead->category_uuid}}">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card mt-3 mb-3">
                    <div class="card-header">Extra information</div>
                    <div class="card-body pb-0">
                        <div class="col-md-4 ">
                            @component('components.input-checkbox', [
                                'field' => 'verified_data',
                                'id' => 'verified_data',
                                'label' => 'Verified?',
                                'required' => true,
                                'inputSize' => 4,
                                'inputValue' => $lead->verified_data,
                                'value' => 1,
                            ])
                            @endcomponent
                        </div>
                        <div class="col-md-4 ">
                            @component('components.input-checkbox', [
                                'field' => 'unique',
                                'id' => 'unique',
                                'label' => 'Unique lead?',
                                'required' => true,
                                'inputSize' => 4,
                                'inputValue' => $lead->unique,
                                'value' => 1,
                            ])
                            @endcomponent
                        </div>
                        <div class="col-md-12 ">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'select',
                                        'field' => 'deadline',
                                        'label' => 'When you need this done?',
                                        'items' => [
                                            'im-flexible' => 'I\'m flexible',
                                            'within-48-hours' => 'Within 48 hours',
                                            'within-a-week' => 'Within a week',
                                            'within-a-month' => 'Within a month',
                                            'within-a-year' => 'Within a year'
                                        ],
                                        'indexSelected' => $lead->deadline
                                    ],
                                    [
                                        'type' => 'textarea',
                                        'field' => 'project_details',
                                        'label' => 'Explain the project',
                                        'inputValue' => $lead->project_details
                                    ]
                                ]
                            ])
                            @endcomponent
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @endsection
    @endcomponent
@endsection
@push('bottom-scripts')
    <script src="{{ asset('js/quiz.js') }}"></script>
@endpush

