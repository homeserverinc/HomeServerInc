@extends('layouts.app')

@section('content')
<div class="card">
    <div class="card-header">
            <h3>User Profile</h3>
    </div>
    <div class="card-body">
        <div class="card">
            <div class="card-body">
                <strong>Name: </strong>{{$user->name}}
            </div> 
        </div>
        <div class="card">
            <div class="card-body">
                <strong>E-mail: </strong>{{$user->email}}
            </div> 
        </div>
        <div class="card">
            <div class="card-body">
                <strong>Created at: </strong>{{$user->created_at}}
            </div> 
        </div>
    </div>
</div>
<div class="card">
    <div class="card-header">
        Password
    </div>
    <div class="card-body">
        <a href="{{route('user.form.change.password')}}" class="btn btn-primary"><i class="fas fa-key"></i>  Change my password</a>
    </div>
</div>
<div class="card">
    <div class="card-header">
        User Roles
    </div>
    <div class="card-body">
        <ul class="list-group">
            @foreach($user->roles as $role)
                <li class="list-group-item">{{$role->display_name}}</li>
            @endforeach
        </ul>
    </div>
</div>
<div class="card">
    <div class="card-body">
        <a href="{{ route('admin.dashboard') }}" class="btn btn-success float-right"><i class="fas fa-arrow-left"></i>  Back</a>
    </div>
</div>
@endsection