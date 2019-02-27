@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'keyField' => 'uuid',
        'rows' => $plans, 
        'model' => 'plan',
        'tableTitle' => 'Plan',
        'displayField' => 'name',
        'actions' => ['edit', 'destroy', ['custom_action' => 'components.customActions.contractor-subscribe-plan']]
        ]);
    @endcomponent
@endsection
@push('document-ready')
        $.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        });
        $(".subs_plan_btn").click(function() {
            const plan = $(this).attr('data-plan')
            $.ajax({
                url: "{{ route('subscribe_plan') }}",
                data: { 'plan':  plan},
                method: 'post',
                dataType: 'json',
                success: function(result){
                    if(result.success){
                        alert(result.message)
                        window.location.href="{{route('lead.index')}}"
                    }else{
                        alert(result.message)
                    }
                },
                error: function(error){
                    console.log(error)
                }

            })
        })
    
@endpush