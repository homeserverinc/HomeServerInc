@extends('layouts.app')

@section('content-no-app')  
    <div id="test">
        <quiz :quiz-uuid="'0e45dcea-5869-44b0-bf65-ab6002429533'"></quiz>
    </div>
@endsection

@push('bottom-scripts')
    <script src="{{ asset('js/test.js') }}"></script>
    {{--  <script src="{{ asset('js/multiQuestionsForm.js') }}"></script>  --}}
@endpush
