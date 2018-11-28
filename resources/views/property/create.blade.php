@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'New Property', 
            'routeUrl' => route('property.store'), 
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
                            'field' => 'property_name',
                            'label' => 'Name',
                            'required' => true,
                            'inputSize' => 6
                        ],
                        [
                            'type' => 'text',
                            'field' => 'property_label',
                            'label' => 'Label',
                            'inputSize' => 6
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
                            'liveSearch' => true
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
                            'liveSearch' => true
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection