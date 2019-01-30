@php
    $quiz = isset($_GET['quiz_uuid']) ? $_GET['quiz_uuid'] : -1;
@endphp
@component('components.input-select', [
    'id' => 'quiz_uuid',
    'name' => 'quiz_uuid',
    'field' => 'quiz_uuid',
    'label' => 'Selected Quiz',
    'inputSize' => 5,
    'items' => $data,
    'keyField' => 'uuid',
    'displayField' => 'quiz',
    'indexSelected' => $quiz,
    'defaultNone' => true,
    'liveSearch' => true
])  
@endcomponent
@push('document-ready')
    $("#quiz_uuid").change(function() {
        $("#searchForm").submit();
    })
@endpush
