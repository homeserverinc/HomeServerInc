@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'New Service vs Property', 
            'routeUrl' => route('property_service.store'), 
            'method' => 'POST',
            'formButtons' => [
                ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
                ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
                ]
            ])
            @section('formFields')
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'select',
                            'field' => 'service_id',
                            'label' => 'Service',
                            'required' => true,
                            'items' => $services,
                            'inputSize' => 5,
                            'displayField' => 'service_description',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'defaultNone' => true,
                        ],
                        [
                            'type' => 'select',
                            'field' => 'property_id',
                            'label' => 'Property',
                            'required' => true,
                            'items' => $properties,
                            'inputSize' => 5,
                            'displayField' => 'property_label',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'defaultNone' => true,
                            'disabled' => true
                        ],
                        [
                            'type' => 'select',
                            'field' => 'field_size',
                            'label' => 'Field Size',
                            'inputSize' => 1,
                            'indexSelected' => 11,
                            'items' => Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
                        ],
                        [
                            'type' => 'select',
                            'field' => 'is_required',
                            'label' => 'Required',
                            'inputSize' => 1,
                            'items' => Array('No', 'Yes'),
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'textarea',
                            'field' => 'property_options',
                            'label' => 'Property Options',
                            'liveSearch' => true,
                            'disabled' => true
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@push('bottom-scripts')
<script>
    $('document').ready(function() {
        var getProperties = function() {
            var service = {};
            alert('Funcionou...');
            service.id = $('#service_id').val();
            service._token = $('input[name="_token"]').val();

            //console.log(cliente);
            $.ajax({
                url: '{{ route("properties.json") }}',
                type: 'POST',
                data: service,
                dataType: 'JSON',
                cache: false,
                success: function (data) {
                    console.log(data);
                    $("#property_id")
                        .removeAttr('disabled')
                        .find('option')
                        .remove();


                    $.each(data, function (i, item) {
                        $('#property_id').append($('<option>', { 
                            value: item.id,
                            text : item.property_label,
                            "data-type": item.property_type_id
                        }));
                    });
                    
                    {{--  @if(old('modelo_veiculo_id'))
                    $('#modelo_veiculo_id').selectpicker('val', {{old('modelo_veiculo_id')}});
                    @endif  --}}

                    $('.selectpicker').selectpicker('refresh');
                },
                error: function (data) {
                    console.log(data);
                }
            });
        }

        $('#service_id').on('changed.bs.select', getProperties);

        $('#property_id').on('changed.bs.select', function() {
            var property_selected = $('#property_id').find('option:selected');
            $('#property_options').prop('disabled', (property_selected.data('type') != 9)); 
        })

        if ($('#service_id').val()) {
            getProperties();
        }
    });
</script>
@endpush
@endsection