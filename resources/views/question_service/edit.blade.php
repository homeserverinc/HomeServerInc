@extends('layouts.app')

@section('content')
    <div class="panel panel-default">
        @component('components.form', [
            'title' => 'Change Service Property', 
            'routeUrl' => route('property_service.update', $propertyService->id), 
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
                            'type' => 'select',
                            'field' => 'service_id',
                            'label' => 'Service',
                            'required' => true,
                            'items' => $services,
                            'inputSize' => 5,
                            'displayField' => 'service_description',
                            'keyField' => 'id',
                            'disabled' => true,
                            'indexSelected' => $propertyService->service_id
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
                            'disabled' => true,
                            'indexSelected' => $propertyService->property_id
                        ],
                        [
                            'type' => 'select',
                            'field' => 'field_size',
                            'label' => 'Field Size',
                            'inputSize' => 1,
                            'indexSelected' => $propertyService->field_size,
                            'items' => Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
                        ],
                        [
                            'type' => 'select',
                            'field' => 'is_required',
                            'label' => 'Required',
                            'inputSize' => 1,
                            'items' => Array('No', 'Yes'),
                            'indexSelected' => $propertyService->is_required
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
                            'inputValue' => $propertyOptions,
                            'disabled' => ($propertyService->property->property_type_id != 9)

                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection