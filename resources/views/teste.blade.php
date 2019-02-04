@extends('layouts.app')

@section('content-no-app')  
    <div id="questions-form">
        {{ csrf_field() }}
        <crud-questions></crud-questions>
        {{--  <multi-questions-form></multi-questions-form>  --}}
    </div>
@endsection

@push('bottom-scripts')
    <script src="{{ asset('js/crudQuestions.js') }}"></script>
    {{--  <script src="{{ asset('js/multiQuestionsForm.js') }}"></script>  --}}
@endpush
