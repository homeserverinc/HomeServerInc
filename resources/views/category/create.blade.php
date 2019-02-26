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
                    ]
                ]
            ])
            @endcomponent
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-12 col-lg-12">
                        <div class="table-responsive">
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th class="col-md-2" >
                                            Category Lead
                                        </th>
                                        <th class="col">
                                            Weight
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($category_leads as $clead)
                                        <tr>
                                            <th scope="row">{{$clead->name}}</th>
                                            <td>
                                                @component('components.form-group', [
                                                    'inputs' => [
                                                        [
                                                            'type' => 'text',
                                                            'field' => 'weights['.$clead->name.']',
                                                            'label' => null,
                                                            'required' => true,
                                                        ]
                                                    ]
                                                ])
                                                @endcomponent
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>


                            </table>

                        </div>
                    </div>
                </div>
            </div>
        @endsection

    @endcomponent
    
@endsection