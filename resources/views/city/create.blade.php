@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'New City', 
            'routeUrl' => route('city.store'), 
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
                            'field' => 'city',
                            'label' => 'City',
                            'required' => true,
                            'inputSize' => 10
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
                            'liveSearch' => true
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
                            'inputSize' => 4
                        ],
                        [
                            'type' => 'number',
                            'field' => 'latitude',
                            'label' => 'Latitude',
                            'inputSize' => 4
                        ],
                        [
                            'type' => 'number',
                            'field' => 'longitude',
                            'label' => 'Longitude',
                            'inputSize' => 4
                        ],
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection