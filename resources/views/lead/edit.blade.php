@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Change Lead', 
            'routeUrl' => route('lead.update', $lead->id), 
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
                                    'label' => 'Name',
                                    'required' => true,
                                    'inputValue' => $lead->customer->name
                                ],
                                [
                                    'type' => 'hidden',
                                    'field' => 'customer_id',
                                    'inputValue' => $lead->customer_id
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
                                            'inputValue' => $lead->customer->address
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
                                            'liveSearch' => true,
                                            'indexSelected' => $lead->customer->city->state_id
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
                                            'indexSelected' => $lead->customer->city_id   
                                        ],
                                        [
                                            'type' => 'text',
                                            'field' => 'zipcode',
                                            'label' => 'Zip',
                                            'required' => true,
                                            'inputSize' => 3,
                                            'inputValue' => $lead->customer->zipcode
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
                                    'type' => 'select',
                                    'field' => 'service_id',
                                    'label' => 'Service',
                                    'items' => $services,
                                    'displayField' => 'service_description',
                                    'keyField' => 'id',
                                    'disabled' => true, 
                                    'indexSelected' => $lead->service_id                            
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
                                    'inputValue' => $lead->description
                                ]
                            ]
                        ])
                        @endcomponent
                        <div id="service_properties">
                        {{--  dinamically create form  --}}
                        </div>
                    </div>
                </div>
                {{--  end lead information  --}}
            @endsection
        @endcomponent
    </div>
    @push('bottom-scripts')
    <script>
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
    
        $('document').ready(function() {
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
    
            var doOnLoadService = function() {      
                var service = {};
                var values = [];
                values = '{!! $lead->service_properties !!}';
                service.id = $('#service_id').val();
                service.values = values;
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

            {{--  var doOnSelectService = function(e) {   
                $('#confirmChangeService').modal('show');
                alert(e.oldValue);
            }  --}}
    
            $('#state_id').on('changed.bs.select', doOnSelectState);
            $('#service_id').on('loaded.bs.select', doOnLoadService);
            {{--  $('#service_id').on('changed.bs.select', doOnSelectService(e));  --}}
            //$('#city_id').on('changed.bs.select', doOnSelectCity);
        });
    </script>
    @endpush
@endsection