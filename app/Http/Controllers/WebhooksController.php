<?php

namespace App\Http\Controllers;

use App\Site;
use App\User;
use App\Agent;
use App\Dispute;
use App\Language;
use App\Charge;
use App\MissedCall;
use App\TwilioWorker;
use App\UserActivity;
use Illuminate\Http\Request;
use App\Events\NewMissedCall;
use Illuminate\Support\Facades\Log;
use App\Events\WorkerActivityChanged;

class WebhooksController extends Controller
{
    public function pusherPresenceEvent(Request $request) {
        try {
            $event = $request->events[0];
            if ($event['name'] == 'member_added') {
                $userActivity = new UserActivity([
                    'user_id' => $event['user_id'],
                    'start_session' => new \DateTime()
                ]);
            } else {
                $userActivity = UserActivity::where('user_id', $event['user_id'])->whereNull('end_session')->orderBy('id', 'desc')->first();

                $beginTime = $userActivity->start_session;
                $endTime = new \DateTime();

                $userActivity->end_session = $endTime;
                $userActivity->session_time = $endTime->getTimestamp() - (new \DateTime($beginTime))->getTimestamp();
            }

            $userActivity->save();        
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            Log::debug($e);
        }
    }

    public function workspaceEvents(Request $request) {
        try {
            Log::debug($request->all());
            switch ($request->EventType) {
                case 'worker.activity.update':
                    $this->workerActivityUpdate($request);
                    break;
                case 'task.canceled':
                    $this->taskCanceled($request);
                    break;
                default:
                    # code...
                    break;
            }            
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            Log::debug($e); 
        }
    }

    public function workerActivityUpdate(Request $request) {
        $worker = TwilioWorker::where('sid', $request->WorkerSid)->first();
            
        $user = User::whereHas('agent', function($query) use ($worker) {
            $query->where('twilio_worker_id', $worker->id);
        })->first();
        
        event(new WorkerActivityChanged($request->all(), $user->id));
    }

    public function taskCanceled(Request $request) {
        try {
            $task = new \StdClass;
            $task = json_decode($request->TaskAttributes);

            //Log::debug($request->TaskAttributes);

            $site = Site::whereHas('phone', function($query) use ($task) {
                $query->where('phone_number', $task->{'to'});
            })->first();

            //Log::debug($site);

            $language = Language::where('acronym', $task->{'selected_language'})->first();

            //Log::debug($language);

            $datetime_call = new \DateTime();

            $datetime_call->setTimestamp($request->Timestamp);

            $missedCall = new MissedCall([
                'datetime_call' => $datetime_call,
                'site_uuid' => $site->uuid,
                'language_id' => $language->id,
                'from' => $task->{'from'}
            ]);

            //Log::debug($missedCall);

            $missedCall->save();

            /* send an SMS */
            event(new NewMissedCall($missedCall, env('SMS_TO_NUMBER')));
        } catch (\Exception $e) {
            Log::error('taskCanceled@WebhooksController: '.$e->getMessage());
        }
    }

    public function stripeWebhook(Request $request){
        try{     
            $charge = Charge::where('stripe_id', '=', $request->input('data.object.charge'))->first();
            if($charge){
                Dispute::Create(
                    [
                        'charge_uuid' => $charge->uuid,
                        'stripe_id' => $request->input('data.object.id'),
                        'reason' => $request->input('data.object.reason'),
                        'type' => $request->input('type'),
                        'status' => $request->input('data.object.status'),
                        'evidences' => json_encode($request->input('data.object.evidence')),
                    ]
                );
                $charge->contractor->update(['active' => 0, 'blocked_reason' => $request->input('type')]);
            }

        } catch(\Exception $e){
            response()->json($e->getMessage());
            Log::error('stripeWebhook@WebhooksController: '.$e->getMessage());
        }
    }
}
