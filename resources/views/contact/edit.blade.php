@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Change Phone', 
            'routeUrl' => route('phone.update', $phone->id), 
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
                            'field' => 'phone_number',
                            'label' => 'Phone Number',
                            'required' => true,
                            'inputSize' => 6,
                            'inputValue' => $phone->phone_number
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection