@permission('update-lead')
<a class="btn btn-sm btn-success dispatch_lead_btn " href="#" data-lead = "{{$data->uuid}}">
        <i class="fas {{ $data->interval ? 'fa-money-check-alt' : 'fa-check' }} " data-toggle="tooltip" data-placement="top" title="{{ __('Close and dispatch') }}" data-original-title="{{  __('Close and dispatch')}}"></i>
</a>
@endpermission