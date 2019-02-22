@extends('layouts.app')

@section('content')
<div class="row">
<div class="col-md-12">
    @component('components.table', [
        'captions' => $fields, 
        'keyField' => 'uuid',
        'rows' => $charges, 
        'model' => 'charge',
        'tableTitle' => 'Charges',
        'displayField' => 'description',
        'actions' => null
        ]);
    @endcomponent
</div>
</div>
@endsection