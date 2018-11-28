@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Change Property', 
            'routeUrl' => route('property.update', $property->id), 
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
                            'field' => 'property_name',
                            'label' => 'Name',
                            'required' => true,
                            'inputSize' => 6,
                            'inputValue' => $property->property_name
                        ],
                        [
                            'type' => 'text',
                            'field' => 'property_label',
                            'label' => 'Label',
                            'inputSize' => 6,
                            'inputValue' => $property->property_label
                        ]                 
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'select',
                            'field' => 'category_id',
                            'label' => 'Category',
                            'required' => true,
                            'items' => $categories,
                            'inputSize' => 6,
                            'displayField' => 'category',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'indexSelected' => $property->category_id
                        ],
                        [
                            'type' => 'select',
                            'field' => 'property_type_id',
                            'label' => 'Type',
                            'required' => true,
                            'items' => $propertyTypes,
                            'inputSize' => 6,
                            'displayField' => 'property_type_description',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'indexSelected' => $property->property_type_id
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection