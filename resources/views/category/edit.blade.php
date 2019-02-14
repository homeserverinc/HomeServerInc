@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change Category', 
        'routeUrl' => route('category.update', $category->uuid), 
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
                        'field' => 'category',
                        'label' => 'Category',
                        'required' => true,
                        'inputValue' => $category->category
                    ]
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection