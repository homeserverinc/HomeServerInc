@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $phones, 
        'model' => 'phone',
        'tableTitle' => 'Phone',
        'displayField' => 'phone_number',
        'actions' => ['edit', 'destroy'],
        'customMethods' => [
            [
                'component' => 'components.customMethods.import_twilio_phone_numbers'
            ]
        ]]);
    @endcomponent
@endsection