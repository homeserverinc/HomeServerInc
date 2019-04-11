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
            <span class="display-5"><img src="{{ asset('images/homeserverinc_logo.png') }}" width="400px" alt="{{ config('app.name', 'Laravel') }}"></span>
            {{--  <h1 class="display-5 text-center">{{ config('app.name', 'Laravel') }}</h1>      --}}
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
                    <input class="form-control form-control-lg{{ $errors->has('password') ? ' is-invalid' : '' }}" placeholder="Password" id="password" type="password" name="password" value="{{ old('password') }}" required>

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
<!-- Start Open Web Analytics Tracker -->
<script type="text/javascript">
//<![CDATA[
var owa_baseUrl = 'https://owa.homeserverinc.com/';
var owa_cmds = owa_cmds || [];
owa_cmds.push(['setSiteId', 'c79c0258e4b5b759ccb7c4f3f3c2b738']);
owa_cmds.push(['trackPageView']);
owa_cmds.push(['trackClicks']);
owa_cmds.push(['trackDomStream']);

(function() {
	var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
	owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
	_owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
	var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
}());
//]]>
</script>
<!-- End Open Web Analytics Code -->
@endsection