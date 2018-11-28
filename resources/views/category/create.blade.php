@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New Category', 
        'routeUrl' => route('category.store'), 
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
                        'field' => 'category',
                        'label' => 'Category',
                        'required' => true,
                        'inputSize' => 10
                    ]
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection