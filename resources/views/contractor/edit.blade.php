@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Change Contractor', 
            'routeUrl' => route('contractor.update', $contractor->uuid), 
            'method' => 'PUT',
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
                                        'inputSize' => 6,
                                        'inputValue' => $contractor->user->name
                                    ],[
                                        'type' => 'text',
                                        'field' => 'users[email]',
                                        'label' => 'Email',
                                        'required' => true,
                                        'inputSize' => 6,
                                        'inputValue' => $contractor->user->email
                                    ],[
                                        'type' => 'password',
                                        'field' => 'users[password]',
                                        'label' => 'Password',
                                        'required' => false,
                                        'inputSize' => 6
                                    ],[
                                        'type' => 'password',
                                        'field' => 'users[password_confirmation]',
                                        'label' => 'Password Confirmation',
                                        'required' => false,
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
                                        'inputValue' => $contractor->company
                                    ],[
                                        'type' => 'text',
                                        'field' => 'address',
                                        'label' => 'Address',
                                        'required' => true,
                                        'inputValue' => $contractor->address
                                    ],[
                                        'type' => 'text',
                                        'field' => 'phone',
                                        'label' => 'Phone',
                                        'required' => false,
                                        'inputValue' => $contractor->phone
                                    ],[
                                        'type' => 'text',
                                        'field' => 'ssn',
                                        'label' => 'SSN tax',
                                        'required' => false,
                                        'inputSize' => 6,
                                        'inputValue' => $contractor->ssn
                                    ],[
                                        'type' => 'text',
                                        'field' => 'ein',
                                        'label' => 'EIN tax',
                                        'required' => false,
                                        'inputSize' => 6,
                                        'inputValue' => $contractor->ein
                                    ],[
                                        'type' => 'select',
                                        'field' => 'site_uuid',
                                        'label' => 'Site',
                                        'required' => false,
                                        'items' => $sites,
                                        'displayField' => 'name',
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,
                                        'defaultNone' => true,
                                        'indexSelected' => $contractor->site_uuid ?? null
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
                    Plan
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
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,
                                        'defaultNone' => true,
                                        'indexSelected' => $contractor->plan->uuid ?? null
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
                                        'inputSize' => 3,
                                        'readOnly' => true,
                                        'inputValue' => '***************'.$contractor->card['last4']
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
                                        'indexSelected' => $contractor->card['exp_month']
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
                                        'indexSelected' => $contractor->card['exp_year']
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
                                        'inputSize' => 6,
                                        'indexSelected' => $contractor->categories()->pluck('uuid')->toArray()
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
    </div>
@endsection