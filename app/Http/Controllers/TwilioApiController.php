<?php

namespace App\Http\Controllers;

use App\User;
use App\Phone;
use App\SipDomain;
use App\TwilioWorker;
use App\SipCredential;
use App\TwilioActivity;
use Twilio\Rest\Client;
use App\TwilioWorkspace;
use App\SipCredentialList;
use Twilio\Jwt\ClientToken;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\SipCredentialListSipDomain;
use Illuminate\Support\Facades\Log;
use Twilio\Rest\Api\V2010\Account\IncomingPhoneNumberInstance;

class TwilioApiController extends Controller
{
    protected function getToken() {
        $capability = new ClientToken(env('TWILIO_ACCOUNT_SID'), env('TWILIO_AUTH_TOKEN'));
        $capability->allowClientOutgoing(env('TWILIO_APP_SID'));
        //$capability->allowClientIncoming('teste');
        return $capability->generateToken();
    }

    protected function getClient() {
        return new Client(env('TWILIO_ACCOUNT_SID'), env('TWILIO_AUTH_TOKEN'));
    }

    public function getSipDomains() {
        return $this->getClient()->sip->domains->read();
    }

    /* SIP Credential Lists */

    public function getSipCredentialLists() {
        return $this->getClient()->sip->credentialLists->read();
    }

    public function createSipCredentialList($friendly_name) {
        return $this->getClient()->sip->credentialLists->create($friendly_name);
    }

    public function updateSipCredentialList(SipCredentialList $sipCredentialList) {
        return $this->getClient()->sip
                                 ->credentialLists($sipCredentialList->sid)
                                 ->update([
                                     'friendlyName' => $sipCredentialList->friendly_name
                                 ]);
    }

    public function deleteSipCredentialList(SipCredentialList $sipCredentialList) {
        try {
            return $this->getClient()->sip
                                 ->credentialLists($sipCredentialList->sid)
                                 ->delete();
        } catch (\Exception $e) {
            return false;
        }
    }

    /* SIP Credentials */
    public function createSipCredential(SipCredentialList $sipCredentialList, SipCredential $sipCredential) {
        return $this->getClient()->sip
                                ->credentialLists($sipCredentialList->sid)
                                ->credentials
                                ->create(
                                    $sipCredential->username,
                                    $sipCredential->password
                                );
    }

    public function updateSipCredential(SipCredentialList $sipCredentialList, SipCredential $sipCredential) {
        return $this->getClient()->sip
                                ->credentialLists($sipCredentialList->sid)
                                ->credentials($sipCredential->sid)
                                ->update(
                                    array('password' => $sipCredential->password)
                                );
    }
    
    public function deleteSipCredential(SipCredential $sipCredential) {
        return $this->getClient()->sip
                                ->credentialLists($sipCredential->sip_credential_list->sid)
                                ->credentials($sipCredential->sid)
                                ->delete();
    }

    /* SIP Credential List Mappings */
    public function getSipCredentialListMappings(SipDomain $sipDomain) {
        return $this->getClient()->sip
                                ->domains($sipDomain->sid)
                                ->credentialListMappings
                                ->read();
    }
    
    public function createSipCredentialListMapping(SipCredentialList $sipCredentialList, SipDomain $sipDomain) {
        return $this->getClient()->sip
                                ->domains($sipDomain->sid)
                                ->credentialListMappings
                                ->create($sipCredentialList->sid);
    }

    public function deleteSipCredentialListMapping(SipCredentialList $sipCredentialList, SipDomain $sipDomain) {
        return $this->getClient()->sip
                                ->domains($sipDomain->sid)
                                ->credentialListMappings($sipCredentialList->sid)
                                ->delete();
    }

    public function getPhoneNumbers() {       
        return $this->getClient()->incomingPhoneNumbers
                                ->read();
    }

    public function updatePhoneNumber(Phone $phone) {
        return $this->getClient()->incomingPhoneNumbers($phone->sid)
                                ->update(array(
                                    'accountSid' => env('TWILIO_ACCOUNT_SID'),
                                    'voiceMethod' => $phone->voice_method,
                                    'voiceUrl' => $phone->voice_url,
                                    'voiceFallbackUrl' => $phone->voice_fallback_url,
                                    'voiceFallbackMethod' => $phone->voice_fallback_method
                                ));
    }

    public function getTaskRouterWorkspaces() {
        return $this->getClient()->taskrouter
                                ->v1
                                ->workspaces
                                ->read();
    }

    public function createTaskRouterWorker(TwilioWorkspace $twilioWorkspace, User $user, Array $attributes) {
        return $this->getClient()->taskrouter
                                ->v1
                                ->workspaces($twilioWorkspace->sid)
                                ->workers
                                ->create($user->name,
                                    array(
                                        'attributes' => json_encode($attributes)
                                    )
                                );
    }

    public function deleteTaskRouterWorker(TwilioWorkspace $twilioWorkspace, TwilioWorker $twilioWorker) {
        return $this->getClient()->taskrouter
                                ->v1
                                ->workspaces($twilioWorkspace->sid)
                                ->workers($twilioWorker->sid)
                                ->delete();
    }

    public function updateTaskRouterWorker(TwilioWorkspace $twilioWorkspace, TwilioWorker $twilioWorker, Array $attributes) {
        return $this->getClient()->taskrouter
                                ->v1
                                ->workspaces($twilioWorkspace->sid)
                                ->workers($twilioWorker->sid)
                                ->update(
                                    array(
                                        "friendlyName" => $twilioWorker->friendly_name,
                                        "attributes" => json_encode($attributes)
                                ));
    }

    public function updateTaskRouterWorkerActivity(TwilioWorkspace $twilioWorkspace, TwilioWorker $twilioWorker, TwilioActivity $twilioActivity) {
        return $this->getClient()->taskrouter
                                ->v1
                                ->workspaces($twilioWorkspace->sid)
                                ->workers($twilioWorker->sid)
                                ->update(array(
                                    "ActivitySid" => $twilioActivity->sid
                                ));
    }

    public function getTaskRouterWorkerCurrentActivity(TwilioWorkspace $twilioWorkspace, TwilioWorker $twilioWorker) {
        return $this->getClient()->taskrouter
                                ->v1
                                ->workspaces($twilioWorkspace->sid)
                                ->workers($twilioWorker->sid)
                                ->fetch();
    }

    public function getTaskRouterWorkflows(TwilioWorkspace $twilioWorkspace = null) {
        $workflows = array();

        if (!$twilioWorkspace) {
            $twilioWorkspaces = $this->getTaskRouterWorkspaces();
            foreach ($twilioWorkspaces as $twilioWorkspace) {
                $workflows[$twilioWorkspace->sid] = $this->getClient()->taskrouter
                                                        ->v1
                                                        ->workspaces($twilioWorkspace->sid)
                                                        ->workflows
                                                        ->read();
            }

        } else {
            $workflows[$twilioWorkspace->sid] = $this->getClient()->taskrouter
                                                    ->v1
                                                    ->workspaces($twilioWorkspace->sid)
                                                    ->workflows
                                                    ->read();
        }

        return $workflows;
    }

    public function createTaskRouterTask() {

    }

    public function getTwilioActivities(TwilioWorkspace $twilioWorkspace) {
        return $this->getClient()->taskrouter
                                ->v1
                                ->workspaces($twilioWorkspace->sid)
                                ->activities
                                ->read();
    }
}
