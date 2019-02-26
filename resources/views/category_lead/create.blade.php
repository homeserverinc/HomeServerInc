@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New Category Lead', 
        'routeUrl' => route('category_lead.store'), 
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
                        'field' => 'name',
                        'label' => 'Name',
                        'required' => true,
                    ]
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection