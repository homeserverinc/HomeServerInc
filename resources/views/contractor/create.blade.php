@extends('layouts.create')
@section('create-form')
    @component('components.form', [
        'title' => 'New Contractor', 
        'routeUrl' => route('contractor.store'), 
        'method' => 'POST',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
        @section('formFields')
            <div class="card card-primary{{ $errors->has('users.name') || $errors->has('users.email') || $errors->has('users.password') ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                   User
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'users[name]',
                                        'label' => 'Name',
                                        'required' => true,
                                        'inputSize' => 6
                                    ],[
                                        'type' => 'text',
                                        'field' => 'users[email]',
                                        'label' => 'Email',
                                        'required' => true,
                                        'inputSize' => 6
                                    ],[
                                        'type' => 'password',
                                        'field' => 'users[password]',
                                        'label' => 'Password',
                                        'required' => true,
                                        'inputSize' => 6
                                    ],[
                                        'type' => 'password',
                                        'field' => 'users[password_confirmation]',
                                        'label' => 'Password Confirmation',
                                        'required' => true,
                                        'inputSize' => 6
                                    ]
                                ]
                            ])
                            @endcomponent
                         </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 card card-primary{{ $errors->has('company') || $errors->has('address') || $errors->has('phone') || $errors->has('ssn') || $errors->has('ein') || $errors->has('site_uuid') ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    Company
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'company',
                                        'label' => 'Company',
                                        'required' => true,
                                    ],[
                                        'type' => 'text',
                                        'field' => 'address',
                                        'label' => 'Address',
                                        'required' => true,
                                    ],[
                                        'type' => 'text',
                                        'field' => 'phone',
                                        'label' => 'Phone',
                                        'required' => false,
                                    ],[
                                        'type' => 'text',
                                        'field' => 'ssn',
                                        'label' => 'SSN tax',
                                        'required' => false,
                                        'inputSize' => 6
                                    ],[
                                        'type' => 'text',
                                        'field' => 'ein',
                                        'label' => 'EIN tax',
                                        'required' => false,
                                        'inputSize' => 6
                                    ],[
                                        'type' => 'select',
                                        'field' => 'site_uuid',
                                        'label' => 'Site',
                                        'required' => false,
                                        'items' => $sites,
                                        'displayField' => 'name',
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,
                                        'defaultNone' => true
                                    ]
                                ]
                            ])
                            @endcomponent
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 card card-primary{{ $errors->has('plan_uuid') || $errors->has('charge') ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    Plan/Charge
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'select',
                                        'field' => 'plan_uuid',
                                        'label' => 'Plan',
                                        'required' => false,
                                        'items' => $plans,
                                        'displayField' => 'name',
                                        'extraDisplayField' => 'price',
                                        'extraDisplayInfo' => " - $",
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,
                                        'defaultNone' => true
                                    ],[
                                        'type' => 'text',
                                        'field' => 'charge',
                                        'label' => 'Charge amount',
                                        'required' => false,
                                    ],[
                                        'type' => 'text',
                                        'field' => 'automatic_recharge_amount',
                                        'label' => 'Automatic Charge amount',
                                        'required' => false,
                                    ],[
                                        'type' => 'text',
                                        'field' => 'automatic_recharge_trigger',
                                        'label' => 'Automatic Charge trigger',
                                        'required' => false,
                                    ]
                                ]
                            ])
                            @endcomponent
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 mb-4 card card-primary{{ $errors->has('card_number') || $errors->has('exp_month') || $errors->has('cvc') || $errors->has('exp_year')  ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    Card
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
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
            <div class="mt-4 mb-4 card card-primary{{ $errors->has('categories') ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    Related Categories
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">

                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'select',
                                        'field' => 'categories[]',
                                        'label' => 'Categorias',
                                        'required' => true,
                                        'multiple' => true,
                                        'items' => $categories,
                                        'displayField' => 'category',
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,
                                        'defaultNone' => false,
                                        'inputSize' => 4
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