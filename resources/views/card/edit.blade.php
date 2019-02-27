@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change Card', 
        'routeUrl' => route('card.update', $card->uuid), 
        'method' => 'PUT',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
       @section('formFields')
           <div class="mt-4 mb-4 card card-primary{{ $errors->has('card_number') || $errors->has('exp_month') || $errors->has('cvc') || $errors->has('exp_year')  ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    Change Card
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.input-checkbox', [
                                'field' => 'default',
                                'label' => 'Default card',
                                'required' => false,
                                'inputSize' => 1,
                                'inputValue' => $card->default,
                                'value' => 1
                            ])
                            @endcomponent
                            @component('components.input-checkbox', [
                                'field' => 'active',
                                'label' => 'Active card',
                                'required' => false,
                                'inputSize' => 1,
                                'inputValue' => $card->active,
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
                                        'inputSize' => 3,
                                        'readOnly' => true,
                                        'inputValue' => '***************'.$card->card_last_four
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
                                        'inputSize' => 3,
                                        'indexSelected' => $card->exp_month
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
                                        'inputSize' => 3,
                                        'indexSelected' => $card->exp_year
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