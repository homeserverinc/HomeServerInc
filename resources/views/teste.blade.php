@extends('layouts.app')

@section('content-no-app')  
    <div id="hs-quiz-placeholder">
        <hs-quiz-form></hs-quiz-form>
    </div>
@endsection

@push('bottom-scripts')
    <script src="{{ asset('js/quiz.js') }}"></script>
    {{--  <script src="{{ asset('js/multiQuestionsForm.js') }}"></script>  --}}
@endpush
