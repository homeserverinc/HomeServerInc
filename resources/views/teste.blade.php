@extends('layouts.app')

@section('content-no-app')  
    <div id="questions-form">
        {{ csrf_field() }}
        <multi-questions-form></multi-questions-form>
    </div>
@endsection

@push('bottom-scripts')
    <script src="{{ asset('js/multiQuestionsForm.js') }}"></script>
@endpush
