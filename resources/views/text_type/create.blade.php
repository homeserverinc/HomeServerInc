@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New Text Type', 
        'routeUrl' => route('text_type.store'), 
        'method' => 'POST',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
        @section('formFields')
            <div class="mt-4 mb-4 card card-primary{{ $errors->has('text_type') ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    New Text Type
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'type',
                                        'label' => 'Type Name',
                                        'required' => true,
                                        'inputSize' => 12
                                    ]
                                ]
                            ])
                            @endcomponent
                        </div>
                    </div>
                </div>
            </div>

        @endsection
    @endcomponent
@endsection