@extends('layouts.create')

@section('create-form')

    @component('components.form', [
        'title' => 'New Plan', 
        'routeUrl' => route('plan.store'), 
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
                        'label' => 'Name',
                        'required' => true,
                        'inputSize' => 4,
                    ],[
                        'type' => 'text',
                        'field' => 'qnt_leads',
                        'label' => 'Qnt Leads',
                        'required' => true,
                        'inputSize' => 4,
                    ],[
                        'type' => 'select',
                        'field' => 'category_lead_uuid',
                        'label' => 'Category Lead',
                        'required' => true,
                        'items' => $category_leads,
                        'displayField' => 'name',
                        'keyField' => 'uuid',
                        'liveSearch' => true,
                        'defaultNone' => true,
                        'inputSize' => 4
                    ]
                ]
            ])
            @endcomponent
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-3 float-left">
                        @component('components.input-checkbox', [
                            'field' => 'unique_leads',
                            'id' => 'unique_leads',
                            'label' => 'Unique leads?',
                            'required' => true,
                            'inputSize' => 4,
                            'inputValue' => 1,
                            'value' => 1,
                        ])
                        @endcomponent
                    </div>
                    @component('components.input-text', [
                        'name' => 'share_count',
                        'field' => 'share_count',
                        'idDiv' => 'share_count_div',
                        'label' => 'Share count',
                        'inputSize' => 6,
                        'div_css' => 'float-right '.(old('unique_leads') ? '' : 'invisible')
                    ])
                    @endcomponent
                </div>
            </div>
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'text',
                        'field' => 'description',
                        'label' => 'Description',
                        'required' => true,
                    ],[
                        'type' => 'text',
                        'field' => 'price',
                        'label' => 'Price',
                        'required' => true,
                        'inputSize' => 4
                    ],[
                        'type' => 'select',
                        'field' => 'interval',
                        'label' => 'Interval',
                        'required' => true,
                        'items' => $intervals,
                        'displayField' => 'name',
                        'keyField' => 'id',
                        'liveSearch' => true,
                        'defaultNone' => true,
                        'indexSelected' => 'week',
                        'inputSize' => 4
                    ],[
                        'type' => 'text',
                        'field' => 'interval_count',
                        'label' => 'Interval Count',
                        'required' => false,
                        'inputSize' => 4,
                        'inputValue' => 1
                    ],
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection

@push('document-ready')
    $("#unique_leads").change(function(){
        if(!$(this).prop('checked')){
            $("#share_count_div").removeClass('invisible')
        }else{
            $("#share_count_div").addClass('invisible')
        }
    })
@endpush