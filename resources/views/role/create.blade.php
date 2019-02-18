@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New Role', 
        'routeUrl' => route('role.store'), 
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
                        'type' => 'text',
                        'field' => 'name',
                        'label' => 'Tag',
                        'required' => true,
                        'inputSize' => 6
                    ],
                    [
                        'type' => 'text',
                        'field' => 'display_name',
                        'label' => 'Name',
                        'required' => true,
                        'inputSize' => 6
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
                    ]
                ]
            ])
            @endcomponent
            <div class="form-group">
                <div class="card card-primary">
                    <div class="card-header">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="selectPermissions" name="selectPermissions">
                            <label class="custom-control-label" for="selectPermissions">Permissões associadas </label>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                        @foreach($permissions as $permission)
                            <div class="col-sm-1 col-md-3 col-lg-3">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input permission_checkbox" value="{{$permission->id}}" name="permissions[]" id="permission_{{$permission->id}}">
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