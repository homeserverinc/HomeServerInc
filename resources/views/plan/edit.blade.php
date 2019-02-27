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
                    ]
                ]
            ])
            @endcomponent

            @component('components.input-checkbox', [
                'field' => 'unique_leads',
                'label' => 'Unique leads?',
                'required' => true,
                'inputSize' => 4,
                'value' => 1,
                'inputValue' => $plan->unique_leads ? true : false
            ])
            @endcomponent
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
                        'indexSelected' => 'week',
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