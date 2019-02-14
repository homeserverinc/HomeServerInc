@extends('layouts.edit')

@section('edit-form')
    @component('components.form', [
        'title' => 'New Service', 
        'routeUrl' => route('service.store'), 
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
                        'field' => 'service_description',
                        'label' => 'Description',
                        'required' => true,
                    ]
                ]
            ])
            @endcomponent
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'select',
                        'field' => 'category_uuid',
                        'label' => 'Category',
                        'required' => true,
                        'items' => $categories,
                        'inputSize' => 6,
                        'displayField' => 'category',
                        'keyField' => 'uuid',
                        'defaultNone' => true,
                        'liveSearch' => true
                    ],
                    [
                        'type' => 'select',
                        'field' => 'quiz_uuid',
                        'label' => 'Quiz',
                        'required' => true,
                        'items' => $quizzes,
                        'inputSize' => 6,
                        'displayField' => 'quiz',
                        'keyField' => 'uuid',
                        'defaultNone' => true,
                        'disabled' => true,
                        'liveSearch' => true
                    ]
                ]
            ])
            @endcomponent
        @endsection
    @endcomponent
@endsection
@push('document-ready')
var doOnSelectCategory = function() {
    var category = {};

    category.uuid = $('#category_uuid').val();
    category._token = $('input[name="_token"]').val();

    $.ajax({
        url: '{{ route("quizzes.json") }}',
        type: 'POST',
        data: category,
        dataType: 'JSON',
        cache: false,
        success: function (data) {
            $("#quiz_uuid")
                .removeAttr('disabled')
                .find('option')
                .remove();


            $.each(data, (i, item) => {
                $('#quiz_uuid').append($('<option>', { 
                    value: item.uuid,
                    text : item.quiz 
                }));
            });

            @if(old('quiz_uuid'))
            $('#quiz_uuid').selectpicker('val', {{old('quiz_uuid')}});
            @endif

            $('.selectpicker').selectpicker('refresh');
        }
    });
}

$('#category_uuid').on('changed.bs.select', doOnSelectCategory);
@endpush