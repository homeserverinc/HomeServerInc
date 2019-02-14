@php
    $inputSize = isset($inputSize) ? '-'.$inputSize : '-12';
    $items = isset($items) ? $items : false;
    $disabled = isset($disabled) ? $disabled : false;
    $autofocus = isset($autofocus) ? $autofocus : false;
    $required = isset($required) ? $required : false;
    $div_css = isset($div_css) ? $div_css : '';
    $rightField = str_replace('[', '.', $field);
    $rightField = str_replace(']', '', $rightField);
@endphp
<div class="col col-sm col-md{{$inputSize}} col-lg{{$inputSize}} {{$div_css}}">
    @if(isset($label))
        @component('components.label', ['label' => $label, 'field' => $field, 'required' => $required])
        @endcomponent
    @endif  

    <input type="password" class="form-control{{ $errors->has($rightField) ? ' is-invalid' : '' }}" name="{{$name}}" id="{{$id}}" value="" {{ $required ? 'required' : '' }}  {{ $autofocus ? 'autofocus' : '' }} {{ $disabled ? 'disabled="disabled"' : '' }}>

    @if ($errors->has($rightField))
        <span class="invalid-feedback">
            <strong>{{ __($errors->first($rightField)) }}</strong>
        </span>
    @endif
</div>