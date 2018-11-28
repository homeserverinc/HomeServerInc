@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'New Sip Credential List vs Sip Domain', 
            'routeUrl' => route('sip_credential_list_sip_domain.store'), 
            'method' => 'POST',
            'formButtons' => [
                ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
                ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
                ]
            ])
            @section('formFields')
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'select',
                            'field' => 'sip_domain_id',
                            'label' => 'Domain',
                            'required' => true,
                            'items' => $sipDomains,
                            'inputSize' => 6,
                            'displayField' => 'friendly_name',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'defaultNone' => true,
                        ],
                        [
                            'type' => 'select',
                            'field' => 'sip_credential_list_id',
                            'label' => 'Credential List',
                            'required' => true,
                            'items' => $sipCredentialLists,
                            'inputSize' => 6,
                            'displayField' => 'friendly_name',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'defaultNone' => true
                        ]
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection