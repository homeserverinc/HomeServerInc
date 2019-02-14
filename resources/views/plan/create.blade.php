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
                        'inputValue' => 1
                    ]
                ]
            ])
            @endcomponent
            @component('components.input-checkbox', [
                'field' => 'unique_leads',
                'label' => 'Unique leads?',
                'required' => true,
                'inputSize' => 4,
                'inputValue' => 1,
                'value' => 1
            ])
            @endcomponent
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