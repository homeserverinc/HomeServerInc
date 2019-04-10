@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Change Music on Hold', 
            'routeUrl' => route('music_on_hold.update', $musicOnHold->uuid), 
            'method' => 'PUT',
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
                            'inputSize' => 6,
                            'inputValue' => $musicOnHold->description
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
                <div class="card mb-3">
                    <div class="card-header">Music on Hold</div>
                    <div class="card-body">
                        <audio controls="controls" style="outline: none">
                            <source src="{{ url($musicOnHold->file_path)}}" type="audio/ogg">
                            Your browser does not support the audio element.
                        </audio> 
                    </div>
                </div>
            @endsection
        @endcomponent
    </div>
@endsection