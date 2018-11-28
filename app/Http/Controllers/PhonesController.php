<?php

namespace App\Http\Controllers;

use App\Phone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\TwilioApiController;
use App\Http\Controllers\HomeServerController;

class PhonesController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'friendly_name' => 'Friendly Name',
        'phone_number' => 'Phone Number'
    ];

    protected $modelName = 'phone';
    protected $recordName = 'friendly_name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadPhone()) {
            if ($request->searchField) {
                $phones = Phone::where('friendly_name', 'like', '%'.$request->searchField.'%')
                            ->orderBy('id', 'desc')
                            ->paginate();
            } else {
                $phones = Phone::orderBy('id', 'desc')->paginate();
            }

            return View('phone.index', [
                'phones' => $phones,
                'fields' => $this->fields
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Phone  $phone
     * @return \Illuminate\Http\Response
     */
    public function edit(Phone $phone)
    {
        $phone = Phone::find($phone->id);

        return View('phone.edit', ['phone' => $phone]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Phone  $phone
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Phone $phone)
    {
        if (Auth::user()->canUpdatePhone()) {
            $this->validate($request, [
                'phone_number' => 'required|string|unique:phones,id,'.$phone->id
            ]);

            try {
                $phone->fill($request->all());
                
                DB::beginTransaction();
                                
                $phone = $this->updateRecord($phone, false);

                if ((new TwilioApiController)->updatePhoneNumber($phone)) {
                    DB::commit();
                    return $this->updateSuccess($phone);
                } else {
                    throw new \Exception('Error updating the Phone Number at Twilio API.');
                }
            } catch (\Exception $e) {
                
                DB::rollback();
                
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Phone  $phone
     * @return \Illuminate\Http\Response
     */
    public function destroy(Phone $phone)
    {
        if (Auth::user()->canDeletePhone()) {
            return $this->deleteRecord($phone);
        } else {
            return $this->accessDenied();
        }
    }

    public function importNumbersFromTwilio() {
        if (Auth::user()->canAccessTwilioImportPhoneNumbers()) {
            try {
                $phoneNumbers = (new TwilioApiController)->getPhoneNumbers();
                
                DB::beginTransaction();
                
                foreach ($phoneNumbers as $phoneNumber) {
                    Phone::updateOrCreate(
                        [
                            'sid' => $phoneNumber->sid
                        ],
                        [
                            'phone_number' => $phoneNumber->phoneNumber,
                            'friendly_name' => $phoneNumber->friendlyName,
                            'voice_method' => $phoneNumber->voiceMethod,
                            'voice_url' => $phoneNumber->voiceUrl,
                            'voice_fallback_method' => $phoneNumber->voiceFallbackMethod,
                            'voice_fallback_url' => $phoneNumber->voiceFallbackUrl
                        ]
                    );
                }

                DB::commit();

                Session::flash('success', __('messages.import_phone_numbers'));
                return redirect()->action('PhonesController@index');
            } catch (\Exception $e) {
                
                DB::rollback();
                
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }
}
