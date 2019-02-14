<label for="{{$field}}" class="col-form-label">
    @if(isset($required))
        @if($required)
        {{-- <span class="badge badge-warning">*</span> --}}
        @endif
    @endif
    {{__($label)}}
</label>