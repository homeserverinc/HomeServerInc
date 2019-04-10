@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'New Music on Hold', 
            'routeUrl' => route('music_on_hold.store'), 
            'method' => 'POST',
            'fileUpload' => true,
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
                            'field' => 'description',
                            'label' => 'Description',
                            'required' => true,
                            'inputSize' => 6
                        ],
                        [
                            'type' => 'file',
                            'field' => 'file_name',
                            'label' => 'File',
                            'required' => true,
                            'inputSize' => 6
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection