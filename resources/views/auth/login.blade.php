@extends('layouts.base')

@push('header-styles')
html,body{
    width:100%;
    margin:0;
    height:100%;
}
@endpush
@section('body')
<div class="container-fluid bg-dark text-white h-100">
    <div class="row align-items-center h-100">
        <div class="col-md-4 mx-auto">
            <h1 class="display-5" align="center">{{ config('app.name', 'Laravel') }}</h1>    
            <form method="POST" action="{{ route('login') }}">
                {{ csrf_field() }}
                <div class="form-group">
                    <input class="form-control form-control-lg{{ $errors->has('email') ? ' is-invalid' : '' }}" placeholder="E-mail" id="email" type="email" name="email" value="{{ old('email') }}" required autofocus>

                    @if ($errors->has('email'))
                        <span class="invalid-feedback">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="form-group">
                    <input class="form-control form-control-lg{{ $errors->has('password') ? ' is-invalid' : '' }}" placeholder="Password" id="password" type="password" name="password" value="{{ old('password') }}" required autofocus>

                    @if ($errors->has('password'))
                        <span class="invalid-feedback">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="form-group">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="remember" name="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label class="custom-control-label" for="remember">Remember Me</label>
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-info btn-lg btn-block">Sing in</button>
                </div>
                <div class="row">
                    <a class="btn btn-link text-light" href="{{ route('password.request') }}">
                        Forgot Your Password?
                    </a>
                </div>
            </form>  
        </div>
    </div>
</div>
@endsection