@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'New Call Route', 
            'routeUrl' => route('callroute.store'), 
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
                            'type' => 'text',
                            'field' => 'description',
                            'label' => 'Description',
                            'required' => true,
                            'inputSize' => 11
                        ],
                        [
                            'type' => 'select',
                            'field' => 'active',
                            'label' => 'Active',
                            'inputSize' => 1,
                            'items' => ['No', 'Yes'],
                            'indexSelected' => 1
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'select',
                            'field' => 'phone_id',
                            'label' => 'Phone Number',
                            'required' => true,
                            'items' => $phones,
                            'inputSize' => 3,
                            'displayField' => 'phone_number',
                            'keyField' => 'id',
                            'liveSearch' => true
                        ],
                        [
                            'type' => 'select',
                            'field' => 'to_destination',
                            'label' => 'Sends to',
                            'required' => true,
                            'items' => [
                                'Agents',
                                'VoiceMessage',
                                'Phone'
                            ],
                            'inputSize' => 3,
                        ],
                        [
                            'type' => 'text',
                            'field' => 'destination_value',
                            'label' => 'Destination Phone',
                            'inputSize' => 3,
                            'disabled' => true
                        ],
                        [
                            'type' => 'select',
                            'field' => 'priority',
                            'label' => 'Priority',
                            'inputSize' => 3,
                            'items' => range(0, 10, 1),
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
<script>
    $(document).ready(function() {
        $("#to_destination").on("changed.bs.select", function(){
            var destination_disabled = ($("#to_destination").val() != 2);
            $("#destination_value").prop("disabled", destination_disabled);
            if (!destination_disabled) {
                $("#destination_value").focus();
            }
        });        
    });
</script>
@endsection