@php
    $displayField = isset($displayField) ? $displayField : 'name';
    $keyField = isset($keyField) ? $keyField : 'id';
    if (isset($colorLineCondition)) {
        $lineConditionField = $colorLineCondition['field'];
        $lineConditionValue = $colorLineCondition['value'];
        $lineCondicionClass = $colorLineCondition['class'];
    } else {
        $colorLineCondition = false;
    }
    $customMethods = isset($customMethods) ? $customMethods : [];
@endphp
<div class="card card-primary">
    <div class="card-header">
        <div class="row">
            <div class="col">
                <h3>{{__(isset($tableTitle) ? $tableTitle : 'tableTitle not informed...') }}</h3>
            </div>
        </div>
        <form id="searchForm" class="form" method="GET" action="{{ route($model.'.index') }}">
            {{ csrf_field() }}
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <div class="input-group">
                            <input type="text" class="form-control" id="searchField" name="searchField" placeholder="{{__('strings.TypeToSearch')}}" value="{{isset($_GET['searchField']) ? $_GET['searchField'] : ''}}">
                            <span class="input-group-append" data-toggle="tooltip" data-placement="top" title="{{__('strings.Search')}}" data-original-title="{{__('Search')}}">
                                <button type="submit" class="btn btn-primary"><i class="fas fa-search"></i></span></button>
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="col-auto">
                    @permission('create-'.str_replace('_', '-', $model))
                    @if(Route::has($model.'.create'))
                    <a href="{{ route($model.'.create') }}" class="btn   btn-success" data-toggle="tooltip" data-placement="top" title="{{__('strings.New')}}" data-original-title="{{__('New')}}">
                        <i class="fas fa-plus"></i>
                    </a>
                    @endif
                    @endpermission
                    @foreach($customMethods as $customMethod) 
                        @component($customMethod['component'])
                        @endcomponent
                    @endforeach
                </div>
            </div>
            <div class="row">
                @if(isset($searchParms))
                    @if (is_array($searchParms)) 
                        @component($searchParms['view'], ['data' => $searchParms['data']])
                        @endcomponent
                    @else 
                        @component($searchParms)
                        @endcomponent
                    @endif
                @endif                        
            </div>
        </form>
    </div>
        <table class="table table-sm table-bordered table-striped table-hover" style="margin: 0px">
            <thead class="thead-light">
                <tr>
                    @foreach($captions as $field => $caption)
                    @if(is_array($caption))
                    <th>{{__($caption['label'])}}</th>
                    @else
                    <th>{{__($caption)}}</th>
                    @endif
                    @endforeach
                    <th class="text-center">{{ __('strings.Actions') }}</th>
                </tr>
            </thead>
            <tbody>
            
            @if($rows->count() > 0)
                @foreach($rows as $row)
                    @if ($colorLineCondition) 
                    <tr {{ ($row->$lineConditionField == $lineConditionValue) ? 'class='.$lineCondicionClass : '' }}>
                    @else
                    <tr {{--  {{(!$row->ativo) ? 'class=danger' : ''}}  --}}>
                    @endif
                        @foreach($captions as $field => $caption)
                            @if(is_array($caption))
                                @if($caption['type'] == 'bool')
                                <td scope="row">{{ __(($row->$field == '1') ? 'Yes' : 'No') }}</td>
                                @endif
                                @if($caption['type'] == 'datetime')
                                <td scope="row">{{ date_format(date_create($row->$field), 'd/m/Y H:i:s') }}</td>
                                @endif
                                @if($caption['type'] == 'date')
                                <td scope="row">{{ date_format(date_create($row->$field), 'd/m/Y') }}</td>
                                @endif
                                @if($caption['type'] == 'decimal')
                                <td scope="row"><div align="right">{{ number_format($row->$field, $caption['decimais'], ',', '.') }}</div></td>
                                @endif
                                @if($caption['type'] == 'list')
                                <td scope="row"><div align="right">{{ $caption['values'][$row->$field] }}</div></td>
                                @endif
                            @else
                                @php
                                    $relations = explode('.', $field);
                                    
                                    $attr = $row;
                                    foreach($relations as $relation){
                                        $attr = $attr->$relation ?? '';
                                    }
                                    
                                @endphp
                                <td scope="row">
                                    <div {{ is_numeric($attr) ? 'align=right' : ''}}>
                                        {{ $attr ?? 'Null'}}
                                    </div>
                                </td>
                            @endif
                        @endforeach
                        
                        <td scope="row" class="text-center">
                            @if(is_array($actions))
                                @foreach($actions as $action)
                                    @if(is_array($action))
                                        @component($action['custom_action'], ['data' => $row])
                                        @endcomponent
                                    @else
                                        @component('components.action', ['action' => $action, 'model' => $model, 'row' => $row, 'displayField' => $displayField, 'keyField'=> $keyField])
                                        @endcomponent
                                    @endif
                                @endforeach
                            @endif
                        </td>
                    </tr>
                    @endforeach
                @else
                    <tr><td colspan="{{ count($captions) + 1 }}">No results.</td></tr>
                @endif
            </tbody>
        </table>
        @if($rows->links() != '')
            <div class="card-footer bg-light">
                <div class="d-flex">
                    <div class="mx-auto">   
                        {{ $rows->links() }}
                    </div>
                </div> 
            </div>
        @endif
</div>


<!-- Modal Dialog -->
@include('layouts.modal')

@push('document-ready')
<!-- Dialog show event handler -->
$('#confirmDelete').on('show.bs.modal', function (e) {
    $message = $(e.relatedTarget).attr('data-message');
    $(this).find('.modal-body p').text($message);
    $title = $(e.relatedTarget).attr('data-title');
    $(this).find('.modal-title').text($title);

    // Pass form reference to modal for submission on yes/ok
    var form = $(e.relatedTarget).closest('form');
    $(this).find('.modal-footer #confirm').data('form', form);
});

<!-- Form confirm (yes/ok) handler, submits form -->
$('#confirmDelete').find('.modal-footer #confirm').on('click', function(){
    $(this).data('form').submit();
});
@endpush