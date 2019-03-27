@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $image_types, 
        'model' => 'image_type',
        'tableTitle' => 'Image Types',
        'displayField' => 'type',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection