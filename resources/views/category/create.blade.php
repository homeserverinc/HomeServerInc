@extends('layouts.create')

@section('create-form')
    @component('components.form', [
        'title' => 'New Category', 
        'routeUrl' => route('category.store'), 
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
                        'field' => 'category',
                        'label' => 'Category',
                        'required' => true,
                        'inputSize' => 6
                    ],
                    [
                        'type' => 'select',
                        'field' => 'quiz_uuid',
                        'label' => 'Quiz',
                        'required' => true,
                        'inputSize' => 6,
                        'keyField' => 'uuid',
                        'displayField' => 'quiz',
                        'items' => $quizzes,
                        'defaultNone' => true,
                        'liveSearch' => true
                    ]
                ]
            ])
            @endcomponent
            <div class="row">
                <div class="col">
                    <table class="table table-sm table-dark">
                        <thead>
                            <tr>
                                <th style="width: 60%">
                                    Category Lead
                                </th>
                                <th style="width: 20%">
                                    Weight
                                </th>
                                <th style="width: 20%">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($category_leads as $clead)
                                <tr>
                                    <th scope="row">{{$clead->name}}</th>
                                    <td>
                                        <input type="number" class="form-control" name="weights[{{$clead->uuid}}]" id="weights[{{$clead->uuid}}]" required value="{{ old('weights.'.$clead->uuid) ?? 0}}">
                                    </td>
                                    <td>
                                        <input type="number" class="form-control" name="prices[{{$clead->uuid}}]" id="prices[{{$clead->uuid}}]" required value="{{ old('prices.'.$clead->uuid) ?? 0}}">
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        @endsection

    @endcomponent

@endsection