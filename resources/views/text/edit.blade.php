@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'Change Text', 
        'routeUrl' => route('text.update', $text->uuid), 
        'method' => 'PUT',
        'formButtons' => [
            ['type' => 'submit', 'label' => 'Save', 'icon' => 'check'],
            ['type' => 'button', 'label' => 'Cancel', 'icon' => 'times']
            ]
        ])
       @section('formFields')
           <div class="mt-4 mb-4 card card-primary{{ $errors->has('text')  ? ' border-danger mb-3' : '' }}">
                <div class="card-header">
                    Change Text
                </div>                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            @component('components.form-group', [
                                'inputs' => [
                                    [
                                        'type' => 'text',
                                        'field' => 'brief',
                                        'label' => 'Brief',
                                        'required' => true,
                                        'inputSize' => 12,
                                        'inputValue' => $text->brief
                                    ],[
                                        'type' => 'textarea',
                                        'field' => 'fullText',
                                        'label' => 'Full Text',
                                        'required' => true,
                                        'inputSize' => 12,
                                        'inputValue' => $text->fullText
                                    ],[
                                        'type' => 'select',
                                        'field' => 'category_uuid',
                                        'label' => 'Categories',
                                        'required' => true,
                                        'items' => $categories,
                                        'displayField' => 'category',
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,
                                        'defaultNone' => true,
                                        'inputSize' => 6,
                                        'indexSelected' => $text->category_uuid,
                                    ],[
                                        'type' => 'select',
                                        'field' => 'text_type_uuid',
                                        'label' => 'Text types',
                                        'required' => true,
                                        'items' => $text_types,
                                        'displayField' => 'type',
                                        'keyField' => 'uuid',
                                        'liveSearch' => true,
                                        'defaultNone' => true,
                                        'inputSize' => 6,
                                        'indexSelected' => $text->text_type_uuid,
                                    ]
                                ]
                            ])
                            @endcomponent
                        </div>
                    </div>
                </div>
            </div>
        @endsection
    @endcomponent
@endsection