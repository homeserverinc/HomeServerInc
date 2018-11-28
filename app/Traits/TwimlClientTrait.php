<?php

namespace App\Traits;

use Twilio\Rest\Client;
use App\TwilioConfiguration;

/**
 * Twiml Client
 */
trait TwimlClientTrait
{
    public function getClient() {
        return new Client(env('TWILIO_ACCOUNT_SID'), env('TWILIO_AUTH_TOKEN'));
    }

    public function defaultWorkspaceSid() {
        return TwilioConfiguration::first()->twilio_workspace->sid;        
    }

    public function defaultWorkflowSid() {
        return TwilioConfiguration::first()->twilio_workflow->sid;        
    }
}
