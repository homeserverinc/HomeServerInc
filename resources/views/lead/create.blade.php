@extends('layouts.app')

@push('assets-css')
    <link href="{{ asset('css/hs_leads_form.css') }}" rel="stylesheet" media="all">
@endpush

@section('content-no-app')
<div class="card">
    @component('components.form', [
        'title' => 'New Lead', 
        'routeUrl' => route('lead.store'), 
        'method' => 'POST',
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
                                    'inputSize' => 6
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'last_name',
                                    'label' => 'Last name',
                                    'required' => true,
                                    'inputSize' => 6
                                ],
                                [
                                    'type' => 'hidden',
                                    'field' => 'customer_uuid',
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
                                            'inputSize' => 9
                                        ], [
                                            'type' => 'text',
                                            'field' => 'zipcode',
                                            'label' => 'Zip',
                                            'required' => true,
                                            'inputSize' => 3
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
                                            'required' => true
                                        ],
                                        [
                                            'type' => 'text',
                                            'field' => 'phone2',
                                            'label' => 'Phone (Secondary)',
                                            'inputSize' => 6
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
                                            'required' => true
                                        ],
                                        [
                                            'type' => 'text',
                                            'field' => 'email2',
                                            'label' => 'E-mail (Secondary)',
                                            'inputSize' => 6
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
                    suffix-theme="light">
                    </hs-quiz-form>
                    <input type="hidden" name="questions" ref="leadQuestions" id="leadQuestions" value="">
                    <input type="hidden" name="category_uuid" ref="categoryUuid" id="categoryUuid" value="">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card mt-3 mb-3">
                    <div class="card-header">Extra information</div>
                    <div class="card-body pb-0">
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
                                    ]
                                ],
                                [
                                    'type' => 'textarea',
                                    'field' => 'project_details',
                                    'label' => 'Explain the project'
                                ]
                            ]
                        ])
                        @endcomponent
                    </div>
                </div>
            </div>
        </div>
        @endsection
    @endcomponent
</div>
@endsection
@push('bottom-scripts')
<script src="{{ asset('js/quiz.js') }}"></script>
<script type="text/javascript">
    function activatePlacesSearch(){
        var input = document.getElementById("street");
        var auto_complete = new google.maps.places.Autocomplete(input);
    }
</script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXEKDJ6apFhd92r8DaBoNuFru26-8aR_I&libraries=places&callback=activatePlacesSearch"></script>
@endpush