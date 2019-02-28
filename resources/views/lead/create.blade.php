@extends('layouts.app')

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
            {{--  customer information  --}}
            <div class="form-group">
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
                                    'label' => 'First Name',
                                    'required' => true,
                                    'inputSize' => 6
                                ],[
                                    'type' => 'text',
                                    'field' => 'last_name',
                                    'label' => 'Last Name',
                                    'required' => true,
                                    'inputSize' => 6
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
                                            'label' => 'Address',
                                            'required' => true,
                                            'inputSize' => 9,
                                            
                                        ], [
                                            'type' => 'text',
                                            'field' => 'zip',
                                            'label' => 'Zip',
                                            'required' => true,
                                            'inputSize' => 3,
                                        ]
                                    ]
                                ])
                                @endcomponent
    
                            </div>
                        </div>   
                        <div class=" card mt-4 ">
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
                                        ],
                                        [
                                            'type' => 'text',
                                            'field' => 'phone2',
                                            'label' => 'Phone (Secondary)',
                                            'inputSize' => 6,
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
                                        ],
                                        [
                                            'type' => 'text',
                                            'field' => 'email2',
                                            'label' => 'E-mail (Secondary)',
                                            'inputSize' => 6,
                                        ]
                                    ]
                                ])
                                @endcomponent
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{--  end customer information  --}}
            {{--  begin lead information  --}}
            <div class="form-group">
                <div id="lead-service-questions">
                    <div class=" card  ">
                        <div class="card-header">
                            <strong>Lead Information</strong>
                        </div>
                        <div class="card-body"> 
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'select',
                                        'field' => 'category_lead_uuid',
                                        'label' => 'Category Lead',
                                        'required' => true,
                                        'items' => $category_leads,
                                        'displayField' => 'name',
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,   
                                        'defaultNone' => true,               
                                    ],[
                                        'type' => 'select',
                                        'field' => 'category_uuid',
                                        'label' => 'Category',
                                        'required' => true,
                                        'items' => $categories,
                                        'displayField' => 'category',
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,   
                                        'defaultNone' => true, 
                                        'vModel' => 'categoryUUID'                
                                    ]
                                ]
                            ])
                            @endcomponent
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'textarea',
                                        'field' => 'description',
                                        'label' => 'Description',
                                        'required' => true,
                                    ]
                                ]
                            ])
                            @endcomponent
                            
                            {{--  dinamically create form  --}}
                            <div class="form-group">
                                <lead_questions_form :category-uuid="categoryUUID"></lead_questions_form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{--  end lead information  --}}
        @endsection
    @endcomponent
</div>
@push('bottom-scripts')
<script type="text/javascript">
    function activatePlacesSearch(){
        var input = document.getElementById("street");
        var auto_complete = new google.maps.places.Autocomplete(input);
    }
</script>
<script src="{{ asset('js/leadQuestionsForm.js') }}"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXEKDJ6apFhd92r8DaBoNuFru26-8aR_I&libraries=places&callback=activatePlacesSearch"></script>
@endpush
@push('document-ready')
    $("#category_uuid").change(function(){
        $.ajax({
            url: "{{route('quizzes.json')}}",
            method: 'POST',
            data: {"uuid": $(this).val()},
            dataType: 'json',
            success: function(data){
                console.log(data)
            },
            error: function(err){
                console.log(err)
            }
        })
    })
@endpush
@endsection