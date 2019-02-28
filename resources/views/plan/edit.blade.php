@extends('layouts.create')

@section('create-form')

    @component('components.form', [
        'title' => 'Change Plan', 
        'routeUrl' => route('plan.update', $plan->uuid), 
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
                        'label' => 'Name',
                        'required' => true,
                        'inputSize' => 4,
                        'inputValue' => $plan->name
                    ],[
                        'type' => 'text',
                        'field' => 'qnt_leads',
                        'label' => 'Qnt Leads',
                        'required' => true,
                        'inputSize' => 4,
                        'inputValue' => $plan->qnt_leads
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
                        'inputSize' => 4,
                        'indexSelected' => $plan->category_lead_uuid,
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
                            'inputValue' => $plan->unique_leads ? true : false,
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
                        'inputValue' => $plan->share_count,
                        'div_css' => 'float-right '.(!$plan->unique_leads ? '' : 'invisible')
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
                        'inputValue' => $plan->description
                    ],[
                        'type' => 'text',
                        'field' => 'price',
                        'label' => 'Price',
                        'required' => true,
                        'inputSize' => 4,
                        'inputValue' => $plan->price
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
                        'indexSelected' => $plan->interval,
                        'inputSize' => 4
                    ],[
                        'type' => 'text',
                        'field' => 'interval_count',
                        'label' => 'Interval Count',
                        'required' => true,
                        'inputSize' => 4,
                        'inputValue' => $plan->interval_count
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