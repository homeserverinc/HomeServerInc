@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Change Site', 
            'routeUrl' => route('site.update', $site->uuid), 
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
                            'label' => 'Site Name',
                            'required' => true,
                            'inputSize' => 6,
                            'inputValue' => $site->name,
                        ],
                        [
                            'type' => 'select',
                            'field' => 'phone_id',
                            'label' => 'Phone Number',
                            'required' => true,
                            'items' => $phones,
                            'inputSize' => 6,
                            'displayField' => 'friendly_name',
                            'keyField' => 'id',
                            'liveSearch' => true,
                            'defaultNone' => true,
                            'indexSelected' => $site->phone_id
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                        'inputs' => [
                            [
                                'type' => 'textarea',
                                'field' => 'voicemessage',
                                'label' => 'Voice Message',
                                'inputValue' => $site->voicemessage
                            ]
                        ]
                    ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'text',
                            'field' => 'address',
                            'label' => 'Site Address (URL)',
                            'required' => true,
                            'inputValue' => $site->address
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                                'type' => 'select',
                                'field' => 'state_id',
                                'label' => 'State',
                                'required' => true,
                                'items' => $states,
                                'inputSize' => 4,
                                'displayField' => 'state_code',
                                'keyField' => 'id',
                                'liveSearch' => true,   
                                'indexSelected' => $site->state_id
                            ],
                            [
                                'type' => 'select',
                                'field' => 'city_id',
                                'label' => 'City',
                                'required' => true,
                                'items' => $cities,
                                'inputSize' => 8,
                                'displayField' => 'city',
                                'keyField' => 'id',
                                'liveSearch' => true,
                                'indexSelected' => $site->city_id
                            ],
                    ]
                ])
                @endcomponent
                <div class="form-group">
                    <div class="card card-primary">
                        <div class="card-header">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="selectCategories" name="selectCategories">
                                <label class="custom-control-label" for="selectCategories">Categories</label>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                            @foreach($categories as $category)
                                <div class="col-sm-1 col-md-3 col-lg-3">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input category_checkbox" value="{{$category->uuid}}" name="categories[]" id="category_{{$category->uuid}}" {{in_array($category->uuid, $assigned_categories) ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="category_{{$category->uuid}}">{{$category->category}}</label>
                                    </div>
                                </div>
                            @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            @endsection
        @endcomponent
    </div>
@endsection
@push('document-ready')
$('#selectCategories').on('change', ()=>{
    let check = $('#selectCategories').is(":checked");
    $('.category_checkbox').prop('checked', check);
});

var doOnSelectState = function() {
    var state = {};

    state.state_id = $('#state_id').val();
    state._token = $('input[name="_token"]').val();

    $.ajax({
        url: '{{ route("cities.json") }}',
        type: 'POST',
        data: state,
        dataType: 'JSON',
        cache: false,
        success: function (data) {
            $("#city_id")
                .removeAttr('disabled')
                .find('option')
                .remove();


            $.each(data, function (i, item) {
                $('#city_id').append($('<option>', { 
                    value: item.id,
                    text : item.city 
                }));
            });

            @if(old('city_id'))
            $('#city_id').selectpicker('val', {{old('city_id')}});
            @endif

            $('.selectpicker').selectpicker('refresh');
        }
    });
}

$('#state_id').on('changed.bs.select', doOnSelectState);
@endpush