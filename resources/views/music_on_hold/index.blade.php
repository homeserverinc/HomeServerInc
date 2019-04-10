@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $music_on_holds, 
        'model' => 'music_on_hold',
        'tableTitle' => 'Music on Hold',
        'displayField' => 'description',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy']
        ]);
    @endcomponent
@endsection