@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New Charge', 
        'routeUrl' => route('charge.store'), 
        'method' => 'POST',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
        @section('formFields')
            <div class="mt-4 mb-4 card card-primary{{ $errors->has('charge') ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    Charge
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'charge',
                                        'label' => 'Charge amount',
                                        'required' => true,
                                        'inputSize' => 6
                                    ],[
                                        'type' => 'select',
                                        'field' => 'card',
                                        'label' => 'Card',
                                        'required' => true,
                                        'items' => $cards,
                                        'displayField' => 'card_brand',
                                        'extraDisplayField' => 'card_last_four',
                                        'extraDisplayInfo' => " - ",
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,
                                        'defaultNone' => true,
                                        'inputSize' => 6
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