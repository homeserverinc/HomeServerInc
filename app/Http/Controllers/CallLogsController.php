<?php

namespace App\Http\Controllers;

use App\CallLog;
use Illuminate\Http\Request;
use App\Traits\TwimlClientTrait;
use App\MissedCall;
use App\Phone;
use App\Events\NewMissedCall;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Boolean;

class CallLogsController extends Controller
{
    use TwimlClientTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\CallLog  $callLog
     * @return \Illuminate\Http\Response
     */
    public function show(CallLog $callLog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CallLog  $callLog
     * @return \Illuminate\Http\Response
     */
    public function destroy(CallLog $callLog)
    {
        //
    }

    public function getTwilioCallLogs($from = false, $to = false, $callStatus = 'no-answer') {
        if ($from) {
            $options['from'] = $from;
        }

        if ($to) {
            $options['to'] = $to;
        }

        if ($callStatus) {
            $options['callStatus'] = $callStatus;
        }

        return $this->getClient()->calls->read($options, 20);
    }


    
    public function syncLogs(bool $notify) {
        $callLogs = $this->getTwilioCallLogs();
        foreach ($callLogs as $callLog) {
            $logs = CallLog::firstOrCreate([
                'sid' => $callLog->sid], [
                'from' => $callLog->from,
                'formated_from' => $callLog->fromFormatted,
                'forwarded_from' => $callLog->forwardedFrom,
                'to' => $callLog->to,
                'status' => $callLog->status,
                'start_time' => $callLog->startTime,
                'end_time' => $callLog->endTime
            ]);     
            
            if (env('APP_ENV', 'local') != 'production') {
                Log::debug('New call Log: '.$logs);
            }

        }
        $this->storeMissedCalls($notify);
    }

    public function storeMissedCalls(bool $notify) {
        try {
            DB::beginTransaction();
            $logs = CallLog::notAnswered()
                            ->notNotified()
                            ->orderBy('start_time', 'DESC')
                            ->get();

            foreach ($logs as $log) {
                $missedCall = new MissedCall;
                try {
                    $siteUuid = Phone::Number($log->forwarded_from)->first()->site->uuid;
                } catch (\Exception $e) {
                    Log::warning('Error getting related site with the Number: '.$log->forwarded_from.'. Exception: '.$e->getMessage());
                    continue;
                }
                $missedCall->fill([
                    'datetime_call' => $log->start_time,
                    'site_uuid' => Phone::Number($log->forwarded_from)->first()->site->uuid,
                    'from' => $log->from
                ]);

                if ($missedCall->save()) {
                    $log->notified = true;
                    if ($log->save()) {
                        if ($notify) {
                            event(new NewMissedCall($missedCall, env('SMS_TO_NUMBER', '')));
                        }
                        DB::commit();
                    }
                }
            }
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error saving new Missed Call record: '.$e->getMessage());
        }
    }
}
