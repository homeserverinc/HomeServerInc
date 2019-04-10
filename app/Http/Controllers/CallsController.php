<?php

namespace App\Http\Controllers;

use App\Call;
use App\Site;
use App\User;
use App\Agent;
use App\Phone;
use Twilio\Twiml;
use App\AgentCall;
use App\Recording;
use App\TwilioWorker;
use Twilio\Rest\Client;
use App\Events\CallEnded;
use App\Events\CallEvent;
use Twilio\Jwt\ClientToken;
use App\Events\IncomingCall;
use App\TwilioConfiguration;
use Illuminate\Http\Request;
use App\Events\CallEndedEvent;
use App\Events\CallRingingEvent;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class CallsController extends Controller
{
    public function getToken() {
        $capability = new ClientToken(env('TWILIO_ACCOUNT_SID'), env('TWILIO_AUTH_TOKEN'));
        $capability->allowClientOutgoing(env('TWILIO_APP_SID'));
        //$capability->allowClientIncoming(Auth::user()->agent->client_name);
        return $capability->generateToken();
    }

    public function getClient() {
        return new Client(env('TWILIO_ACCOUNT_SID'), env('TWILIO_AUTH_TOKEN'));
    }

    public function callCenter() {        
        return view('call.call-center')->withToken($this->getToken());
    }

    public function outgoing(Request $request) {
        $response = new Twiml();

        //Log::debug($request->all());

        if (isset($request->To)) {
            $numberTo = explode('@', $request->To)[0];
            $numberTo = explode(':', $numberTo)[1];
            $spelledNumber = join(',', str_split($request->to));
            $spelledNumber = join(',', str_split($numberTo));
            $response->say('Calling to '.$spelledNumber);
            $response->dial([
                'callerId' => '+1 857-214-2300'
            ])->number($numberTo);
        } else {
            $response->say('The number to call is missing!');
        }

        Log::debug($response);
        return $response;
    }

    public function sendSMSMessage($to, $from,  $message) {
        return $response = $this->getClient()
            ->messages
            ->create($to, [
                'from' => $from,
                'body' => $message
            ]);
    }

    public function getPhoneNumberFromSip($number) {
        $numberTo = explode('@', $number)[0];
        $numberTo = explode(':', $numberTo)[1];

        return $numberTo;
    }

    public function incoming(Request $request) {
        //insert all info about this call on database
        $this->store($request);

        //get all routes avaiable
        $routes = $this->getRoutesToPhone($request);

        /* Log::info('routes => '.$routes); */

        //return a TwiML that will redirect the call according avaiable routes
        return $this->redirectIncomingCall($request, $routes);
    }

    public function store(Request $request) {
        $call = new Call();

        Log::debug('store a call: '.$request);

        $call->callsid = $request->CallSid;
        $call->called = $request->Called;
        $call->called_zip = $request->CalledZip;
        $call->called_city = $request->CalledCity;
        $call->called_state = $request->CalledState;
        $call->called_country = $request->CalledCountry;
        $call->caller = $request->Caller;
        $call->caller_zip = $request->CallerZip;
        $call->caller_city = $request->CallerCity;
        $call->caller_state = $request->CallerState;
        $call->caller_country = $request->CallerCountry;
        $call->from = $request->From;
        $call->from_zip = $request->FromZip;
        $call->from_city = $request->FromCity;
        $call->from_state = $request->FromState;
        $call->from_country = $request->FromCountry;
        $call->to = $request->To;
        $call->to_zip = $request->ToZip;
        $call->to_city = $request->ToCity;
        $call->to_state = $request->ToState;
        $call->to_country = $request->ToCountry;
        $call->direction = $request->Direction;
        $call->api_version = $request->ApiVersion;
        $call->account_sid = $request->AccountSid;
        $call->call_begin = now();

        $call->save();
    }

    public function getCallInfo(Request $request) {
        Log::info('request->called = '.$this->getPhoneNumberFromSip($request->Called));
        $call = Call::where('callsid', $request->callsid)->first();
        $phone = Phone::where('phone_number', $this->getPhoneNumberFromSip($request->Called))->first();
        $site = Site::where('phone_id', $phone->id)->first();

        return response()->json([
            /* 'call' => $call,
            'phone' => $phone, */
            'site' => $site
        ]);
    }

    public function getCallInfoFromTask(Request $request) {
        $task = json_decode($request->TaskAttributes);
        $site = Site::with('city.state')
                    ->with(['phone' => function($query) use ($task) {
                        $query->where('phone_number', $task->{'to'});
                    }])
                    ->first();

        $worker = TwilioWorker::where('sid', $request->WorkerSid)->first();
        $user = User::whereHas('agent', function($query) use ($worker) {
            $query->where('twilio_worker_id', $worker->id);
        })->first();
        
        $result = [
            'site' => $site,
            'user' => $user
        ];

        return $result;
    }

    public function getRoutesToPhone(Request $request) {
        $callroutes = DB::table('call_routes')
                        ->join('phones', 'phones.id', 'call_routes.phone_id')
                        ->where('phones.phone_number', '=', $this->getPhoneNumberFromSip($request->Called))
                        ->where('call_routes.active', true)
                        ->orderBy('call_routes.priority', 'desc')
                        ->get();        

        Log::info('Routes -> '.$callroutes);
        return $callroutes;
    }

    public function redirectIncomingCall(Request $request, $routes) {
        $response = new Twiml();

        foreach ($routes as $route) {
            Log::info('to_destination: '.$route->to_destination);
            switch ($route->to_destination) {
                case 0: //redirect to agents
                    /* get the next agent to answer current call */
                    $agent = $this->getNextAgent();

                    //Log::info('Agent: '.$agent);
                    //Log::info('Ligando para: '.$agent->agent_name.'@'.env('TWILIO_SIP_DOMAIN'));
                    

                    /* get call info */
                    $callinfo = $this->getCallInfo($request);

                    /* Store Agent x Call info */
                    $this->storeAgentCallInfo($request, $agent);

                    //Log::info('CallInfo: '.$callinfo);

                    /* Notify the agent about the call that is coming */
                    event(new IncomingCall($callinfo, $agent->user_id));

                    $dial = $response->dial(['answerOnBridge' => true]);
                    $dial->sip($agent->agent_name.'@'.env('TWILIO_SIP_DOMAIN'));             
                    break;
                case 1: //redirect to voicemessage
                    $response->say("Thank you for calling us. We don't have anyone to 
                                    answer this call right now. Please after the beep 
                                    leave a message that we will get back to you as soon 
                                    as possible.");
                    $response->record();
                    $response->hangup();
                    break;
                case 2: //redirect to a phone
                    $dial = $response->dial(['answerOnBridge' => true]);
                    $dial->number($route->destination_value);
                    break;
            }
        }     

        return $response;
    }

    public function getNextAgent() {
        return User::find(3)->agent()->first();
    }

    public function getRecordings() {
        return $this->getClient()->recordings->read();
    }

    public function storeRecordings() {
        foreach($this->getRecordings as $unsavedRecording) {
            $recording = Recording::firstOrNew([
                'recording_sid' => $unsavedRecording->sid
            ]);

            $recording->account_sid = $unsavedRecording->accountSid;
            $recording->call_sid = $unsavedRecording->callSid;
            $recording->duration = $unsavedRecording->duration;
            $recording->recording_created_at = $unsavedRecording->dateCreated;
            $recording->recording_updated_at = $unsavedRecording->dateUpdated;

            $recording->save();
        }
    }

    public function getCurrentAgents() {
        dd($this->getClient()->sip->credentialLists->read());
    }

    public function incomingCall() {
        event(new CallRingingEvent('soooo', Auth::id()));
    }

    public function callStatus(Request $request) {
        if ($request->CallStatus == 'completed') {
            Log::debug($request);
            $agent = $this->getAgentByCall($this->getCallBySid($request->CallSid));
            event(new CallEnded($agent->user_id));
        }
    }

    public function getCallBySid($sid) {
        $call = Call::where('callsid', $sid)->first();

        return $call ? $call : new Call; 
    }

    public function getAgentByCall(Call $call) {
        $agentCall = AgentCall::where('call_id', $call->id)->first();
        $agent = Agent::find($agentCall->agent_id);

        return $agent ? $agent : new Agent;
    }

    public function storeAgentCallInfo(Request $request, Agent $agent) {
        $call = Call::where('callsid', $request->CallSid)->first();
        $agentCall = new AgentCall;
        $agentCall->agent_id = $agent->id;
        $agentCall->call_id = $call->id;

        Log::debug('agentCall: '.$agentCall);

        $agentCall->save();
    }

    public function ura(Request $request) {
        $response = new Twiml();
        
        Log::debug($request->all());

        $site = Phone::where('phone_number', $request->Called)->first()->site;

        //Log::debug($request->all());
        //Log::debug($site->voicemessage);

        $response->say($site->voicemessage, [
            'voice' => 'woman',
            'language' => 'en'
        ]);
        
        $gather = $response->gather([
            'numDigits' => 1,
            'timeout' => 5,
            'action' => '/enqueue-call'
        ]);

        $gather->say(' Para Español, oprime el uno.', [
            'voice' => 'woman',
            'language' => 'es'
        ]);
        
        $gather->say('For English, hold or press two.', [
            'voice' => 'woman',
            'language' => 'en'
        ]);

        $response->redirect('/enqueue-call', ['method' => 'POST']);

        return $response;
    }

    public function enqueueCall(Request $request) {
        $language = 'en';
        
        if ($request->Digits == '1') {
                /* ES */
                $language = 'es';
        }

        $twilioConfig = TwilioConfiguration::first();

        $response = new Twiml();

        $response->enqueue([
            'workflowSid' => $twilioConfig->twilio_workflow->sid
        ])->task(json_encode([
            'selected_language' => $language
        ]));

        return $response;
    }

    public function workflowCallbak(Request $request) {
        Log::debug('workflowCallback...');
        $this->store($request);
        $callInfo = $this->getCallInfoFromTask($request);
        Log::debug('callinfo: '.$callInfo['user']);
        $agent = $callInfo['user']->agent;
        Log::debug('agent '.$agent);
        /* Store Agent x Call info */
        $this->storeAgentCallInfo($request, $agent);

        event(new IncomingCall($callInfo['site'], $callInfo['user']->id));

        //Log::debug($request->all());
        $response = response()->json([
            'instruction' => 'dequeue'
        ]);

        //Log::debug($response);

        return $response;
    }
}