@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Update Twilio Configuration', 
            'routeUrl' => route('twilio_configuration.update', $twilioConfiguration->id), 
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
                            'type' => 'text',
                            'field' => 'config_name',
                            'label' => 'Configuration',
                            'inputValue' => $twilioConfiguration->config_name
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'select',
                            'field' => 'sip_domain_id',
                            'label' => 'SIP Domain',
                            'required' => true,
                            'items' => $sipDomains,
                            'inputSize' => 4,
                            'displayField' => 'friendly_name',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'defaultNone' => true,
                            'indexSelected' => $twilioConfiguration->sip_domain_id
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
                            'liveSearch' => true,
                            'defaultNone' => true,
                            'indexSelected' => $twilioConfiguration->twilio_workspace_id
                        ],
                        [
                            'type' => 'select',
                            'field' => 'twilio_workflow_id',
                            'label' => 'Twilio Workflow',
                            'required' => true,
                            'items' => $twilioWorkflows,
                            'inputSize' => 4,
                            'displayField' => 'friendly_name',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'defaultNone' => true,
                            'indexSelected' => $twilioConfiguration->twilio_workflow_id
                        ],
                    ]
                ])
                @endcomponent
            @endsection
        @endcomponent
    </div>
@endsection