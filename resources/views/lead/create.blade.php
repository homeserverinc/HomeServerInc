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
                                    'field' => 'customer',
                                    'label' => 'Name',
                                    'required' => true,
                                ],
                                [
                                    'type' => 'hidden',
                                    'field' => 'customer_id'
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
                                            'field' => 'address',
                                            'label' => 'Address',
                                            'required' => true,
                                        ]
                                    ]
                                ])
                                @endcomponent
                                @component('components.form-group', [
                                    'inputs' => [
                                        [
                                            'type' => 'select',
                                            'field' => 'state_id',
                                            'label' => 'State',
                                            'required' => true,
                                            'items' => $states,
                                            'inputSize' => 3,
                                            'displayField' => 'state_name',
                                            'keyField' => 'id',
                                            'defaultNone' => true,
                                            'liveSearch' => true
                                        ],
                                        [
                                            'type' => 'select',
                                            'field' => 'city_id',
                                            'label' => 'City',
                                            'required' => true,
                                            'items' => $cities,
                                            'inputSize' => 6,
                                            'displayField' => 'city',
                                            'keyField' => 'id',
                                            'liveSearch' => true,   
                                            'defaultNone' => true,                               
                                        ],
                                        [
                                            'type' => 'text',
                                            'field' => 'zipcode',
                                            'label' => 'Zip',
                                            'required' => true,
                                            'inputSize' => 3,
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
                                        'field' => 'service_id',
                                        'label' => 'Service',
                                        'required' => true,
                                        'items' => $services,
                                        'displayField' => 'service_description',
                                        'keyField' => 'id',
                                        'liveSearch' => true,   
                                        'defaultNone' => true, 
                                        'vModel' => 'serviceId'                              
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
                                <lead_questions_form :service-id="serviceId"></lead_questions_form>
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
<script src="{{ asset('js/leadQuestionsForm.js') }}"></script>
@endpush
@push('document-ready')
    function setCityId(city_id) {
        var city = {};

        city.id = city_id;
        city._token = $('input[name="_token"]').val();

        console.log('city_id='+city_id);

        $.ajax({
            url: '{{ route("city-by-id") }}',
            type: 'POST',
            data: city,
            dataType: 'JSON',
            cache: false,
            success: function (data) {
                console.log(data);
                $("#city_id")
                    .removeAttr('disabled')
                    .find('option')
                    .remove();

                $.each(data, function (i, item) {
                    $('#city_id').append($('<option>', { 
                        value: item.id,
                        text : item.city,
                        "data-state": item.state_id
                    }));
                });
                
                $('#city_id').selectpicker('val', city_id);
                $('#state_id').selectpicker('val', data[0].state_id);
                $('.selectpicker').selectpicker('refresh');
            }
        });
        
        //select the state_id of the city
        //set the state_id
        //retrieve all cities from this state
        //set the original city_id to the selected city

        
    }

    function doOnSelectCustomer(data) {
        var customer = {};

        customer.id = $('#customer_id').val();
        customer._token = $('input[name="_token"]').val();

        $.ajax({
            url: '{{ route("customer-by-id") }}',
            type: 'POST',
            data: customer,
            dataType: 'JSON',
            cache: false,
            success: function (data) {
                $('#address').val(data.address);
                $('#email1').val(data.email1);
                $('#email2').val(data.email2);
                $('#phone1').val(data.phone1);
                $('#phone2').val(data.phone2);  
                setCityId(data.city_id);
            }
        });
    }

    function getSelectOptions(data) {
        var options = '';
        $.each(data, function(x, option) {
            options += '<option value="'+x+'">'+option+'</option>';
        });

        return options;
        console.log(options);
    }

    function createFieldsForService(data) {
        {{--  clear container  --}}
        $('#service_properties').empty();
        $.each(data, function(i, item) {
            console.log('property_type_id='+item.property_type_id);
            switch(item.property_type_id) {
                case 1:
                case 3:
                case 4:
                    console.log('deu certo, property_type_id='+item.property_type_id);
                    $('#service_properties').html(
                        //'<div class="col col-sm col-md-12 col-lg-12 {{ $errors->has('+item.property_name+') ? ' has-error' : '' }}">'+
                            '<label for="'+item.property_name+'" class="control-label">'+
                                item.property_label+
                            '</label>'+
                            '<input type="text" class="form-control" name="'+item.property_name+'" id="'+item.property_name+'" value="{{ old('+item.property_name+') }}">'
                        //'</div>'
                    );   
                    break;
                case 9:
                    $('#service_properties').html(
                        '<label for="'+item.property_name+'" class="control-label">'+
                            item.property_label+
                        '</label>'+
                        '<select class="form-control selectpicker" data-live-search=true id="'+item.property_name+'" name="'+item.property_name+'" >'+
                            getSelectOptions(["internal", "external"])+
                        '</select>'
                    );
                    break;
            }
        });

        {{--  $.ajax({
            url: "{{ route('get_form_service_property') }} ",
            data: data,
            success: funtion(data) {
                $('#service_properties').innerHtml();
            },
            dataType: html
        });  --}}
    }

    function populateCityIdSelect(data) {
        $("#city_id")
            .removeAttr('disabled')
            .find('option')
            .remove();


        $.each(data, function (i, item) {
            $('#city_id').append($('<option>', { 
                value: item.id,
                text : item.city,
                "data-state": item.state_id
            }));
        });

        @if(old('city_id'))
        $('#city_id').selectpicker('val', {{old('city_id')}});
        @endif

        $('.selectpicker').selectpicker('refresh');
    }
    var doOnSelectState = function() {
        var city_selected = $('#city_id').find('option:selected');
        if (city_selected.data('state') != $('#state_id').val()) {
            //select city
            var state = {};
            state.state_id = $('#state_id').val();
            state._token = $('input[name="_token"]').val();
    
            $.ajax({
                url: '{{ route("cities.json") }}',
                type: 'POST',
                data: state,
                dataType: 'JSON',
                cache: false,
                success: function (data) {
                    //console.log(data);
                    populateCityIdSelect(data);
                }
            });
        } 
    }

    var doOnSelectCity = function() {
        var selected = $('#city_id').find('option:selected');
        $('#state_id').val(selected.data('state')); 
    }

    $( "#customer" ).autocomplete({
        source: function(request, response) {
            var customer = {};
            customer.name = request.term;
            customer._token = $('input[name="_token"]').val();

            //console.log(customer);
            $.ajax({
                url: '{{ route("customers.autocomplete") }}',
                type: 'POST',
                data: customer,
                dataType: 'JSON',
                cache: false,
                success: function (data) {
                    //console.log(data);
                    //response(data);
                    response($.map( data, function(item) {
                        return {
                            value: item.name,
                            id: item.id
                        };
                    }));
                }

            });
        },
        select: function (event, ui) {
            //console.log(ui);
            //$("#customer").val(ui.item.label); // display the selected text
            $("#customer_id").val(ui.item.id); // save selected id to hidden input
            doOnSelectCustomer(ui.item);
        }   
    });

    var doOnSelectService = function() {      
        var service = {};
        service.id = $('#service_id').val();
        service._token = $('input[name="_token"]').val();

        $.ajax({
            //url: '{{ route("service-properties.json") }}',
            url: '{{ route("dynamic-service-form") }}',
            type: 'POST',
            data: service,
            dataType: 'HTML',
            cache: false,
            success: function (data) {
                console.log(data);
                $('#service_properties').empty();
                $('#service_properties').html(data);
                $('.selectpicker').selectpicker('refresh');
                //createFieldsForService(data);
            }
        });
    }

    $('#state_id').on('changed.bs.select', doOnSelectState);
    $('#service_id').on('changed.bs.select', doOnSelectService);
    //$('#city_id').on('changed.bs.select', doOnSelectCity);
@endpush
@endsection