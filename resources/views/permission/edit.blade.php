@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change Permission', 
        'routeUrl' => route('permission.update', $permission->id), 
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
                        'field' => 'name',
                        'label' => 'Tag',
                        'required' => true,
                        'inputSize' => 6,
                        'readOnly' => true,
                        'inputValue' => $permission->name
                    ],
                    [
                        'type' => 'text',
                        'field' => 'display_name',
                        'label' => 'Name',
                        'required' => true,
                        'inputSize' => 6,
                        'inputValue' => $permission->display_name
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
                        'inputValue' => $permission->description
                    ]
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection