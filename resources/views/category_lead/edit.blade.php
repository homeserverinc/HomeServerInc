@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change Category Lead', 
        'routeUrl' => route('category_lead.update', $category_lead->uuid), 
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
                        'label' => 'Name',
                        'required' => true,
                        'inputValue' => $category_lead->name
                    ]
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection