<?php
    switch($action) {
        case 'show':
            $btn_style = 'btn-success';
            $btn_icon = 'eye';
            $tooltip = __('strings.Show');
            $permission = 'read-'.str_replace('_', '-', $model);
            break;
        case 'edit':
            $btn_style = 'btn-warning';
            $btn_icon = 'edit'; 
            $tooltip = __('strings.Edit');
            $permission = 'update-'.str_replace('_', '-', $model);
            break;
        case 'destroy':
            $btn_style = 'btn-danger';
            $btn_icon = 'trash-alt';
            $tooltip = __('strings.Remove');
            $permission = 'delete-'.str_replace('_', '-', $model);
            break;
    }
?>
@php
    $displayField = isset($displayField) ? $displayField : 'name';
    $keyField = isset($keyField) ? $keyField : 'id';
@endphp

@permission($permission)
@if($action == 'destroy')    
    <form id="deleteForm{{$row->id}}" action="{{route($model.'.'.$action, ['$model' => $row->$keyField])}}" method="POST" style="display: inline">
        <span data-toggle="tooltip" data-placement="top" title="{{$tooltip}}" data-original-title="{{$tooltip}}">
             <button class="btn btn-sm btn-danger" type="button" data-toggle="modal" data-target="#confirmDelete" data-title="{{__('Remove Confirmation') }}" 
                data-message="{{ __('strings.Remove').' '.__('models.'.$model).': "'.$row->$displayField.'"'}}?">
                <i class="fas fa-{{$btn_icon}}"></i>
            </button>
        </span>
        <input type="hidden" name="_method" value="DELETE">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
    </form>
@else
    <span data-toggle="tooltip" data-placement="top" title="{{$tooltip}}" data-original-title="{{$tooltip}}">
        <a href="{{route($model.'.'.$action, [$model => $row->$keyField])}}" class="btn btn-sm {{$btn_style}}"><span class="fas fa-{{$btn_icon}}" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="{{$tooltip}}" data-original-title="{{$tooltip}}"></span></a>
    </span>
@endif
@endpermission
