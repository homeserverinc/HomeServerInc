@extends('layouts.app')

@section('content-no-app')  
    <div id="questions-form">
        {{ csrf_field() }}
        <crud-questions></crud-questions>
    </div>
@endsection

@push('bottom-scripts')
    <script src="{{ asset('js/crudQuestions.js') }}"></script>
@endpush
