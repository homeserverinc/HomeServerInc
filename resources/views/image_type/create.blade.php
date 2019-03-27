@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New image Type', 
        'routeUrl' => route('image_type.store'), 
        'method' => 'POST',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
        @section('formFields')
            <div class="mt-4 mb-4 card card-primary{{ $errors->has('image_type') ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    New image Type
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