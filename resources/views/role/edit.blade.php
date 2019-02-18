@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change Role', 
        'routeUrl' => route('role.update', $role->id), 
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
                        'field' => 'name',
                        'label' => 'Tag',
                        'required' => true,
                        'inputSize' => 6,
                        'inputValue' => $role->name
                    ],
                    [
                        'type' => 'text',
                        'field' => 'display_name',
                        'label' => 'Name',
                        'required' => true,
                        'inputSize' => 6,
                        'inputValue' => $role->display_name
                    ]
                ]
            ])
            @endcomponent
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'textarea',
                        'field' => 'description',
                        'label' => 'Description',
                        'inputValue' => $role->description
                    ]
                ]
            ])
            @endcomponent
            <div class="form-group">
                <div class="card card-primary">
                    <div class="card-header">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="selectPermissions" name="selectPermissions">
                            <label class="custom-control-label" for="selectPermissions">{{__('Permissions')}}</label>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                        @foreach($permissions as $permission)
                            <div class="col-sm-1 col-md-3 col-lg-3">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input permission_checkbox" value="{{$permission->id}}" name="permissions[]" id="permission_{{$permission->id}}" {{in_array($permission->id, $assigned_permissions) ? 'checked' : ''}}>
                                    <label class="custom-control-label" for="permission_{{$permission->id}}">{{$permission->display_name}}</label>
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
    $('#selectPermissions').on('change', ()=>{
        let check = $('#selectPermissions').is(":checked");
        $('.permission_checkbox').prop('checked', check);
    });
@endpush