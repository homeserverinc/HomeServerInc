@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $twilioConfigurations, 
        'model' => 'twilio_configuration',
        'tableTitle' => 'Twilio Configuration',
        'displayField' => 'config_name',
        'actions' => ['edit']
        ]);
    @endcomponent
@endsection