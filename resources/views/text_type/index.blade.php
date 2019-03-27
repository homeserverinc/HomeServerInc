@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $text_types, 
        'model' => 'text_type',
        'tableTitle' => 'Text Types',
        'displayField' => 'type',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection