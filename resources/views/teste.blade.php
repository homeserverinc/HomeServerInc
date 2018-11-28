@extends('layouts.app')

@section('content-no-app')
    <div class="panel panel-default">
    <div id="lead-service-questions">
        <select name="service_id" id="service_id" v-model="serviceId">
            <option value="">nada</option>
            <option value="3">servico</option>
        </select>
        <lead_questions_form v-bind:service-id="serviceId"></lead_questions_form>
    </div>
@endsection

@push('bottom-scripts')
    <script src="{{ asset('js/leadQuestionsForm.js') }}"></script>
@endpush
