    
<a class="btn btn-xs btn-success" href="{{ route('lead.create_from_contact', ['contact' => $data->id]) }}">
        <i class="fas fa-flash" data-toggle="tooltip" data-placement="top" title="{{__('Generate a Lead')}}" data-original-title="{{__('Generate a Lead')}}"></i>
</a>