<div style="padding: 10px; text-align: center;display: flex;align-items: center;justify-content: center;flex-direction: column">
	<h2>New lead incoming!</h2>
	<div style="display: flex;flex-direction: row">
		<div style="padding: 20px; border: 1px solid lightgray; border-radius: 10px; width: 350px;">
			<h3>{{$lead->customer->first_name}} {{$lead->customer->last_name}}</h3>
			<p><b>Phone:</b> {{$lead->customer->phone1}}</p>
			<p><b>Address:</b> {{$lead->customer->street}}</p>
			<p><b>Mail:</b> {{$lead->customer->email1}}</p>
			<p><b>Details:</b> {{$lead->project_details}}</p>
			<p><b>Created at:</b> {{$lead->created_at}}</p>
			<p><a href="{{$url}}">Click here for more informations</a></p>
		</div>
		<div style="padding: 20px; border: 1px solid lightgray; border-radius: 10px; width: 350px; text-align: left;margin-left: 20px">
			{!! $questions !!}
		</div>
	</div>

	<div style="margin-top: 50px;">
		© Peersvc {{date('Y')}} <br />
		<a href="http://www.peersvc.com" style="color: gray; text-decoration: none;">www.peersvc.com</a>
	</div>
</div>