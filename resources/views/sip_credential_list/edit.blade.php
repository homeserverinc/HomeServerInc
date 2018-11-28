@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Update Sip Credential List', 
        'routeUrl' => route('sip_credential_list.update', $sip_credential_list->id), 
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
                        'field' => 'friendly_name',
                        'label' => 'Name',
                        'required' => true,
                        'inputValue' => $sip_credential_list->friendly_name
                    ]
                ]
            ])
            @endcomponent
            <div class="form-group">
                <div class="card card-primary">
                    <div class="card-header">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="selectSipDomains" name="selectSipDomains">
                            <label class="custom-control-label" for="selectSipDomains">SIP Domains</label>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                        @foreach($sipDomains as $sip_domain)
                            <div class="col-sm-1 col-md-3 col-lg-3">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input sip_domain_checkbox" value="{{$sip_domain->id}}" name="sip_domains[]" id="sip_domain_{{$sip_domain->id}}" {{in_array($sip_domain->id, $assigned_sip_domains) ? 'checked' : ''}}>
                                    <label class="custom-control-label" for="sip_domain_{{$sip_domain->id}}">{{$sip_domain->friendly_name}}</label>
                                </div>
                            </div>
                        @endforeach
                        </div>
                    </div>
                </div>
            </div>
        @endsection
    @endcomponent
@endsection
@push('document-ready')
$('#selectSipDomains').on('change', ()=>{
    let check = $('#selectSipDomains').is(":checked");
    $('.sip_domain_checkbox').prop('checked', check);
});
@endpush