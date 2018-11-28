@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Change City', 
            'routeUrl' => route('city.update', $city->id), 
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
                            'field' => 'city',
                            'label' => 'City',
                            'required' => true,
                            'inputSize' => 10,
                            'inputValue' => $city->city
                        ],
                        [
                            'type' => 'select',
                            'field' => 'state_id',
                            'label' => 'State',
                            'required' => true,
                            'items' => $states,
                            'inputSize' => 2,
                            'displayField' => 'state_name',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'indexSelected' => $city->state_id
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'text',
                            'field' => 'county',
                            'label' => 'County',
                            'inputSize' => 4,
                            'inputValue' => $city->county
                        ],
                        [
                            'type' => 'number',
                            'field' => 'latitude',
                            'label' => 'Latitude',
                            'inputSize' => 4,
                            'inputValue' => $city->latitude
                        ],
                        [
                            'type' => 'text',
                            'field' => 'longitude',
                            'label' => 'Longitude',
                            'inputSize' => 4,
                            'inputValue' => $city->longitude
                        ],
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection