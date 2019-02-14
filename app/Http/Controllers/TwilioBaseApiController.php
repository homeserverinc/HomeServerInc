<?php

namespace App\Http\Controllers;

use Twilio\Rest\Client;
use Twilio\Jwt\ClientToken;
use Illuminate\Http\Request;

class TwilioBaseApiController extends Controller
{
    private $tokenCapabilities = [];
    
    public function setTokenCapability($capability) {
        array_push($this->tokenCapabilities, $capability);
    }
    
    public function getClient() {
        return new Client(env('TWILIO_ACCOUNT_SID'), env('TWILIO_AUTH_TOKEN'));
    }

    public function getToken() {
        $token = new ClientToken(env('TWILIO_ACCOUNT_SID'), env('TWILIO_AUTH_TOKEN'));
        foreach($this->tokenCapabilities as $keys => $values) {
            foreach($values as $key => $value) {
                $token->$key($value);
            }
        }
        return $token->generateToken();
    }

}
