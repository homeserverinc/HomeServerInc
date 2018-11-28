@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Change Call Route', 
            'routeUrl' => route('callroute.update', $callRoute->id), 
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
                            'field' => 'description',
                            'label' => 'Description',
                            'required' => true,
                            'inputSize' => 11,
                            'inputValue' => $callRoute->description
                        ],
                        [
                            'type' => 'select',
                            'field' => 'active',
                            'label' => 'Active',
                            'inputSize' => 1,
                            'items' => ['No', 'Yes'],
                            'indexSelected' => 1,
                            'indexSelected' => $callRoute->active
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
                            'liveSearch' => true,
                            'indexSelected' => $callRoute->phone_id
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
                            'indexSelected' => $callRoute->to_destination
                        ],
                        [
                            'type' => 'text',
                            'field' => 'destination_value',
                            'label' => 'Destination Phone',
                            'inputSize' => 3,
                            'disabled' => true,
                            'inputValue' => $callRoute->destination_value
                        ],
                        [
                            'type' => 'select',
                            'field' => 'priority',
                            'label' => 'Priority',
                            'inputSize' => 3,
                            'items' => range(0, 10, 1),
                            'indexSelected' => $callRoute->priority
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection