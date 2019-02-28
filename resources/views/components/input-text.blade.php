@php
    $inputSize = isset($inputSize) ? '-'.$inputSize : '-12';
    $items = isset($items) ? $items : false;
    $disabled = isset($disabled) ? $disabled : false;
    $autofocus = isset($autofocus) ? $autofocus : false;
    $required = isset($required) ? $required : false;
    $css = isset($css) ? $css : '';
    $id = isset($id) ? $id : $name;
    $idDiv = isset($idDiv) ? $idDiv : '';
    $div_css = isset($div_css) ? $div_css : '';
    $vModel = isset($vModel) ? $vModel : false;
    $readOnly = isset($readOnly) ? $readOnly : false;
    $rightField = str_replace('[', '.', $field);
    $rightField = str_replace(']', '', $rightField);

@endphp

{{--  {{dd($inputValue)}}  --}}
<div class="col col-sm col-md{{$inputSize}} col-lg{{$inputSize}} {{$div_css}}" id="{{$idDiv}}">
    @if(isset($label))
        @component('components.label', ['label' => $label, 'field' => $field, 'required' => $required])
        @endcomponent
    @endif  
    
    <input type="text" class="form-control{{ $errors->has($rightField) ? ' is-invalid' : '' }} {{$css}}" {{ ($vModel) ? 'v-model='.$vModel : '' }} name="{{$name}}" id="{{$id}}" value="{{ isset($inputValue) ? $inputValue : old($rightField) }}" {{ $required ? 'required' : '' }}  {{ $autofocus ? 'autofocus' : '' }} {{ $disabled ? 'disabled="disabled"' : '' }} {{ $readOnly ? 'readonly' : '' }}>

    @if ($errors->has($rightField))
        <span class="invalid-feedback"> 
            <strong>{{ $errors->first($rightField) }}</strong>
        </span>
    @endif
</div>