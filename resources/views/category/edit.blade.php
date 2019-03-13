@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change Category', 
        'routeUrl' => route('category.update', $category->uuid), 
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
                        'field' => 'category',
                        'label' => 'Category',
                        'required' => true,
                        'inputValue' => $category->category,
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
                        'liveSearch' => true,
                        'indexSelected' => $category->quiz_uuid
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
                                        <input type="number" class="form-control" name="weights[{{$clead->uuid}}]" id="weights[{{$clead->uuid}}]" required value="{{$category->category_leads->firstWhere('uuid', '=', $clead->uuid)->pivot->weight ?? 0}}">
                                    </td>
                                    <td>
                                        <input type="number" class="form-control" name="prices[{{$clead->uuid}}]" id="prices[{{$clead->uuid}}]" required value="{{ $category->category_leads->firstWhere('uuid', '=', $clead->uuid)->pivot->price ?? 0}}">
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