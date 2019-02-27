@extends('layouts.app')

@section('content')
    <div class="card">
        @component('components.form', [
            'title' => 'New Quiz', 
            'routeUrl' => route('quiz.store'), 
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
                            'field' => 'quiz',
                            'label' => 'Quiz',
                            'required' => true,
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection