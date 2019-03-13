@extends('layouts.create')

@section('create-form')  
@component('components.form', [
    'title' => 'New Agent', 
    'routeUrl' => route('agent.store'),  
    'method' => 'POST',
    'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
        ]
    ]) 
    @section('formFields')
        <div class="card">
            <div class="card-header">User data</div>
            <div class="card-body">
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'text',
                            'field' => 'name',
                            'label' => 'Name',
                            'required' => true,
                            'inputSize' => 6
                        ],
                        [
                            'type' => 'text',
                            'field' => 'email',
                            'label' => 'E-mail',
                            'required' => true,
                            'inputSize' => 6
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'select',
                            'field' => 'role_id',
                            'label' => 'Profile',
                            'required' => true,
                            'items' => $roles,
                            'inputSize' => 4,
                            'displayField' => 'display_name',
                            'keyField' => 'id',
                        ],
                        [
                            'type' => 'password',
                            'field' => 'password',
                            'label' => 'Password',
                            'required' => true,
                            'inputSize' => 4
                        ],
                        [
                            'type' => 'password',
                            'field' => 'password_confirmation',
                            'label' => 'Confirmation',
                            'required' => true,
                            'inputSize' => 4
                        ],
                    ]
                ])
                @endcomponent
            </div>
        </div>
        <div class="card mt-3 mb-3">
            <div class="card-header">Agent data</div>
            <div class="card-body">
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'select',
                            'field' => 'sip_credential_id',
                            'label' => 'Sip Credential',
                            'required' => true,
                            'items' => $sipCredentials,
                            'inputSize' => 4,
                            'displayField' => 'username',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'defaultNone' => true
                        ],
                        [
                            'type' => 'select',
                            'field' => 'twilio_workspace_id',
                            'label' => 'Twilio Workspace',
                            'required' => true,
                            'items' => $twilioWorkspaces,
                            'inputSize' => 4,
                            'displayField' => 'friendly_name',
                            'keyField' => 'id',
                            'liveSearch' => true
                        ],
                        [
                            'type' => 'select',
                            'field' => 'agent_status_id',
                            'label' => 'Status',
                            'items' => $agent_statuses,
                            'inputSize' => 4,
                            'displayField' => 'agent_status',
                            'keyField' => 'id',
                            'indexSelected' => 1,
                            'disabled' => true
                        ]
                    ]
                ])
                @endcomponent
                <div class="form-group">
                    <div class="card card-primary{{ $errors->has('languages') ? ' border-danger mb-3' : '' }}">
                        <div class="card-header">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="selectLanguages" name="selectLanguages">
                                <label class="custom-control-label" for="selectLanguages">Languages</label>
                            </div>
                        </div>
                        <input type="hidden" name="languages" value="">
                        
                        <div class="card-body">
                            <div class="row">
                            @foreach($languages as $language)
                                <div class="col-sm-1 col-md-3 col-lg-3">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input language_checkbox" value="{{$language->id}}" name="languages[]" id="language_{{$language->id}}" {{ is_array(old('languages')) ? in_array($language->id, old('languages')) ? 'checked' : '' : ''}}>
                                        <label class="custom-control-label" for="language_{{$language->id}}">{{$language->language}}</label>
                                    </div>
                                </div>
                            @endforeach
                            </div>
                        </div>
                        @if ($errors->has('languages'))
                            <span class="invalid-feedback d-block p-2"> 
                                <strong>{{ $errors->first('languages') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    @endsection
@endcomponent
@endsection
@push('document-ready')
$('#selectLanguages').on('change', ()=>{
    let check = $('#selectLanguages').is(":checked");
    $('.language_checkbox').prop('checked', check);
});
@endpush