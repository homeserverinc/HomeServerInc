@extends('layouts.app')


@push('assets-css')
    <link href="{{ asset('css/hs_leads_form.css') }}" rel="stylesheet" media="all">
@endpush
 
@section('content-no-app')  
    <div id="hs-quiz-placeholder">
        <hs-quiz-form
        suffix-theme="light">
        </hs-quiz-form>
        <input type="hidden" ref="leadQuestions" value="">
    </div>
@endsection

@push('bottom-scripts')
    <script src="{{ asset('js/quiz.js') }}"></script>
    {{--  <script src="{{ asset('js/multiQuestionsForm.js') }}"></script>  --}}
@endpush
