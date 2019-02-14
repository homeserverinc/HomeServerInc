@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New Card', 
        'routeUrl' => route('card.store'), 
        'method' => 'POST',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
        @section('formFields')
           <div class="mt-4 mb-4 card card-primary{{ $errors->has('card_number') || $errors->has('exp_month') || $errors->has('cvc') || $errors->has('exp_year')  ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    New Card
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.input-checkbox', [
                                'field' => 'default',
                                'label' => 'Default card',
                                'required' => false,
                                'inputSize' => 1,
                                'inputValue' => 1,
                                'value' => 1
                            ])
                            @endcomponent
                            @component('components.input-checkbox', [
                                'field' => 'active',
                                'label' => 'Active card',
                                'required' => false,
                                'inputSize' => 1,
                                'inputValue' => 1,
                                'value' => 1
                            ])
                            @endcomponent
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'card_number',
                                        'label' => 'Card Number',
                                        'required' => true,
                                        'inputSize' => 3
                                    ],[
                                        'type' => 'select',
                                        'field' => 'exp_month',
                                        'label' => 'Expiration month',
                                        'required' => true,
                                        'items' => $months,
                                        'displayField' => 'name',
                                        'keyField' => 'id',
                                        'liveSearch' => true,
                                        'defaultNone' => false,
                                        'inputSize' => 3
                                    ],[
                                        'type' => 'number',
                                        'field' => 'cvc',
                                        'label' => 'CVC',
                                        'required' => true,
                                        'inputSize' => 3
                                    ],[
                                        'type' => 'select',
                                        'field' => 'exp_year',
                                        'label' => 'Expiration year',
                                        'required' => true,
                                        'items' => $years,
                                        'displayField' => 'name',
                                        'keyField' => 'id',
                                        'liveSearch' => true,
                                        'defaultNone' => false,
                                        'inputSize' => 3
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