@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change image Type', 
        'routeUrl' => route('image_type.update', $image_type->uuid), 
        'method' => 'PUT',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
       @section('formFields')
           <div class="mt-4 mb-4 card card-primary{{ $errors->has('image_type')  ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    Change image
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'type',
                                        'label' => 'Image Type',
                                        'required' => true,
                                        'inputSize' => 12,
                                        'inputValue' => $image_type->type
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