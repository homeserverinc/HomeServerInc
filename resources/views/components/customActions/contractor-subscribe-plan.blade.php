@role('contractor')
<a class="btn btn-xs btn-success subs_plan_btn {{ Auth::user()->contractor->plan_uuid === $data->uuid ? 'disabled' : '' }}" href="#" data-plan = "{{$data->uuid}}">
        <i class="fas {{ $data->interval ? 'fa-money-check-alt' : 'fa-check' }} " data-toggle="tooltip" data-placement="top" title="{{ $data->interval ? __('Subscribe') : __('Release') }}" data-original-title="{{ $data->interval ? __('Subscribe') : __('Release')}}"></i>
</a>
@endrole