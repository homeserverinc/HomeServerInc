@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'My profile', 
            'routeUrl' => route('contractor_update_profile', $contractor->uuid), 
            'method' => 'PUT',
            'formButtons' => [
                ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
    
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
                                    ],[
                                        'type' => 'text',
                                        'field' => 'automatic_recharge_amount',
                                        'label' => 'Automatic Charge amount',
                                        'required' => false,
                                        'readOnly' => true,
                                        'inputValue' => $contractor->automatic_recharge_amount,
                                        'inputSize' => 6
                                    ],[
                                        'type' => 'text',
                                        'field' => 'automatic_recharge_trigger',
                                        'label' => 'Automatic Charge trigger',
                                        'required' => false,
                                        'inputSize' => 6,
                                        'readOnly' => true,
                                        'inputValue' => $contractor->automatic_recharge_trigger
                                    ]
                                ]
                            ])
                            @endcomponent
                         </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 mb-4 card card-primary{{ $errors->has('company') || $errors->has('address') || $errors->has('phone') || $errors->has('ssn') || $errors->has('ein') || $errors->has('site_uuid') ? ' border-danger mb-3' : '' }}">
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
                                        'readOnly' => true,
                                        'inputValue' => $contractor->company
                                    ],[
                                        'type' => 'text',
                                        'field' => 'address',
                                        'label' => 'Address',
                                        'required' => true,
                                        'readOnly' => true,
                                        'inputValue' => $contractor->address
                                    ],[
                                        'type' => 'text',
                                        'field' => 'phone',
                                        'label' => 'Phone',
                                        'required' => false,
                                        'readOnly' => true,
                                        'inputValue' => $contractor->phone
                                    ],[
                                        'type' => 'text',
                                        'field' => 'ssn',
                                        'label' => 'SSN tax',
                                        'required' => false,
                                        'inputSize' => 6,
                                        'readOnly' => true,
                                        'inputValue' => $contractor->ssn
                                    ],[
                                        'type' => 'text',
                                        'field' => 'ein',
                                        'label' => 'EIN tax',
                                        'required' => false,
                                        'inputSize' => 6,
                                        'readOnly' => true,
                                        'inputValue' => $contractor->ein
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