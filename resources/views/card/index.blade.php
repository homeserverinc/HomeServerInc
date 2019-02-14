@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $cards, 
        'model' => 'card',
        'tableTitle' => 'Card',
        'displayField' => 'card_brand',
        'keyField' => 'uuid',
        'actions' => ['edit', 'destroy']
    ]);
    @endcomponent
@endsection