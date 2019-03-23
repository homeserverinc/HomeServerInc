@extends('layouts.app')

@section('content')
    @component('components.table', [
        'captions' => $fields, 
        'rows' => $leads, 
        'model' => 'lead',
        'tableTitle' => 'Lead',
        'displayField' => 'first_name',
        'keyField' => 'uuid',
        'actions' => [['custom_action' => 'components.customActions.lead-dispatch'], 'edit', 'destroy']
        ]);
    @endcomponent
@endsection

@push('document-ready')
        $.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        });
        $(".dispatch_lead_btn").click(function() {
            if(confirm('Are you sure about this?')){
                const lead = $(this).attr('data-lead')
                $.ajax({
                    url: "{{ route('dispatch_lead') }}",
                    data: { 'lead':  lead},
                    method: 'post',
                    dataType: 'json',
                    success: function(result){
                        if(result.success){
                            alert(result.message)
                            window.location.href="{{route('lead.index')}}"
                        }else{
                            alert(result.status)
                        }
                    },
                    error: function(error){
                        console.log(error)
                    }

                })
            }
            
        })
    
@endpush