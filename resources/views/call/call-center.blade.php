@extends('layouts.base')

@section('head')
    <script src="//media.twiliocdn.com/sdk/js/client/v1.4/twilio.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
@endsection

@section('body')
<div class="container-fluid">
<div class="row">
    <div class="col-sm-12 col-md-4 col-lg-4">
       {{--   <div class="container">  --}}
            {{ csrf_field() }}
           <div class="btn btn-success btn-block" onclick="testeCall('CA0954cb02b1f4843d48fe2a0bdea345e9');" >Teste</div>
            <div class="alert alert-danger hidden" role="alert" id="ringingAlert">
                <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
                <p id="callerId"></p>
            </div>
            <div class=" card  ">
                <div class="card-header">
                    <input type="text" class="form-control size-lg" id="phoneNumber" style="font-size: 3em"> 
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-info btn-lg btn-block" onclick="pressNumber(1);">1</button>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-info btn-lg btn-block" onclick="pressNumber(2);">2</button>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-info btn-lg btn-block" onclick="pressNumber(3);">3</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-outline btn-info btn-lg btn-block">4</button>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-info btn-lg btn-block">5</button>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-info btn-lg btn-block">6</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-info btn-lg btn-block">7</button>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-info btn-lg btn-block">8</button>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-info btn-lg btn-block">9</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-success btn-lg btn-block" onclick="handleCallBtn($('#phoneNumber').val());">Answer</button>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-info btn-lg btn-block" onclick="$('#ringingAlert').toggleClass('hidden');$('#btnHangup').toggleClass('disabled');">0</button>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <button class="btn btn-warning btn-lg btn-block" id="btnHangup" onclick="hangupCall();">Hangup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {{--  </div>  --}}
    {{--  <div class="col-sm-12 col-md-8 col-lg-8">
        <div class=" card  ">
            <div class="card-header">Ticket</div>
            <div class="card-body">
                <form action="" class="form">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" class="form-control" name="phone">
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="text" class="form-control" name="email">
                    </div>
                    <div class="form-group">
                        <label for="service">Service Description</label>
                        <textarea name="service" id="service" cols="30" rows="10" class="form-control"></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>  --}}
</div>
</div>
    <script src="{{ asset('js/twilio_client.js') }}"></script>
@endsection