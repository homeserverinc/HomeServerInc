@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change Text Type', 
        'routeUrl' => route('text_type.update', $text_type->uuid), 
        'method' => 'PUT',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
       @section('formFields')
           <div class="mt-4 mb-4 card card-primary{{ $errors->has('text_type')  ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    Change Text
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'type',
                                        'label' => 'Text Type',
                                        'required' => true,
                                        'inputSize' => 12,
                                        'inputValue' => $text_type->type
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