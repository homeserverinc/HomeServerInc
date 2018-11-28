@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change Agent', 
        'routeUrl' => route('agent.update', $agent->id), 
        'method' => 'PUT',
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
                        'field' => 'user_id',
                        'label' => 'User',
                        'required' => true,
                        'items' => $users,
                        'inputSize' => 3,
                        'displayField' => 'name',
                        'keyField' => 'id',
                        'liveSearch' => true,
                        'defaultNone' => true,
                        'indexSelected' => $agent->user_id
                    ],
                    [
                        'type' => 'select',
                        'field' => 'sip_credential_id',
                        'label' => 'Sip Credential',
                        'required' => true,
                        'items' => $sipCredentials,
                        'inputSize' => 3,
                        'displayField' => 'username',
                        'keyField' => 'id',
                        'liveSearch' => true,
                        'defaultNone' => true,
                        'indexSelected' => $agent->sip_credential_id
                    ],
                    [
                        'type' => 'select',
                        'field' => 'twilio_workspace_id',
                        'label' => 'Twilio Workspace',
                        'required' => true,
                        'items' => $twilioWorkspaces,
                        'inputSize' => 3,
                        'displayField' => 'friendly_name',
                        'keyField' => 'id',
                        'liveSearch' => true,
                        'indexSelected' => $agent->twilio_workspace_id
                    ],
                    [
                        'type' => 'select',
                        'field' => 'agent_status_id',
                        'label' => 'Status',
                        'items' => $agent_statuses,
                        'inputSize' => 3,
                        'displayField' => 'agent_status',
                        'keyField' => 'id',
                        'indexSelected' => 1,
                        'disabled' => true,
                        'indexSelected' => $agent->agent_status_id
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
                                    <input type="checkbox" class="custom-control-input language_checkbox" value="{{$language->id}}" name="languages[]" id="language_{{$language->id}}" {{ is_array(old('languages')) ? in_array($language->id, old('languages')) ? 'checked' : '' : in_array($language->id, $assignedLanguages) ? 'checked' : ''}}>
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
        @endsection
    @endcomponent
@endsection
@push('document-ready')
$('#selectLanguages').on('change', ()=>{
    let check = $('#selectLanguages').is(":checked");
    $('.language_checkbox').prop('checked', check);
});
@endpush