<?php

namespace App\Http\Controllers;

use App\Charge;
use App\Card;
use Stripe;
use App\Contractor;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\HomeServerController;

class ChargesController extends HomeServerController
{

    use ApiResponse;

    public $fields = [
        'description' => 'Description',
        'amount' => 'Amount (USD)',
        'card.card_last_four' => 'Card last four',
        'card.card_brand' => 'Card Brand',
        'created_at' => 'Created',
    ];

    public $modelName = 'charge';
    public $recordName = 'uuid';


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       if (Auth::user()->canReadCharge()) {
            if ($request->searchField) {
                if(Auth::user()->hasRole('contractor'))
                    $charges = Charge::where('contractor_uuid', '=', $request->user()->contractor->uuid)
                        ->where('description', 'like', '%'.$request->searchField.'%')                    
                        ->orderBy('created_at', 'desc')
                        ->paginate();
                else
                    $charges = Charge::where('description', 'like', '%'.$request->searchField.'%')
                        ->orWhere('amount', 'like', '%'.$request->searchField.'%')
                        ->orderBy('created_at', 'desc')
                        ->paginate();    
            } else {
                $charges = Auth::user()->hasRole('contractor') ? Charge::orderBy('created_at', 'desc')->where('contractor_uuid', '=', $request->user()->contractor->uuid)->paginate() : Charge::orderBy('created_at', 'desc')->paginate();
            }
        } else {
            return $this->accessDenied();
        }

        return View('charge.index', [
            'fields' => $this->fields,
            'charges' => $charges
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateCharge()) {
            if (Auth::user()->hasRole('contractor')) {
                $cards = Auth::user()->contractor->cards->active;
            } else {
                $cards = Card::Active()->paginate();
            }
            return View('charge.create', ['cards' => $cards]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Auth::user()->canCreateCharge()) {
            $this->validate($request, [
                'charge' => 'required|numeric',
                'card' => 'required|exists:cards,uuid'
            ]);

            try {
                DB::beginTransaction();

                if($request->filled('charge')){
                    $contractor = Auth()->user()->contractor;
                    $card = Card::find($request->input('card'));
                    if($card->active){
                        $amount = (float) $request->input('charge');
                        if($amount >= 300)
                            $amount += ceil($amount * 0.10);
                        try{
                            $charge = Stripe::charges()->create([
                                'customer' => $contractor->stripe_id,
                                'currency' => 'USD',
                                'amount'   => $amount,
                                'source' => $card->stripe_id
                            ]);
                            
                            $charge = new Charge([
                                'amount' => $amount,
                                'contractor_uuid' => $contractor->uuid,
                                'stripe_id' => $charge['id'],
                                'description' => 'Charge of '.($amount).' to '.$contractor->user->name.'.',
                                'card_uuid' => $card->uuid
                            ]);

                            $chargeUpdated = $this->createRecord($charge);
                            $contractor->increment('wallet', $charge->amount);

                        }catch(\Stripe\Error\Card $e) {
                            // Since it's a decline, \Stripe\Error\Card will be caught
                            $body = $e->getJsonBody();
                            $err  = $body['error'];

                            if($contractor->payment_attempts < 3)
                                $contractor->increment('payment_attempts', 1);
                            else
                                $contractor->update(['active' => 0, 'block_reason' => $err['message']]);
                        } catch(\Exception $e){
                            return $this->doOnException($e);
                        }
                    }else{
                        return $this->warningMessage("Card desactivated. Can't charge with this card.");
                    }
                }


                DB::commit();

                return $chargeUpdated;

            } catch (\Exception $e) {
                DB::rollback();
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }


    
}
