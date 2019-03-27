<?php

namespace App\Http\Controllers;

use App\Card;
use Stripe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\HomeServerController;

class CardsController extends HomeServerController
{

    public $fields = [
        'card_brand' => 'Brand',
        'card_last_four' => 'Last four',
        'exp_month' => 'Exp. Month',
        'exp_year' => 'Exp. Year',
    ];

    protected $modelName = 'card';
    protected $recordName = 'card';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadCard()) {
            if(Auth::user()->hasRole('superadministrator')){
                if ($request->searchField) {
                    $cards = Card::where('brand', 'like', '%'.$request->searchField.'%')
                    ->orWhere('card_last_four', 'like', '%'.$request->searchField.'%')
                    ->paginate();
                } else {
                    $cards = Card::paginate();
                }
            }elseif(Auth::user()->hasRole('contractor')){
                if ($request->searchField) {
                    $cards = 
                    Card::where('contractor_uuid', '=', Auth::user()->contractor->uuid)
                    ->where(function ($query) {
                        $query->where('card_brand', 'like', '%'.$request->searchField.'%')
                              ->orWhere('card_last_four', 'like', '%'.$request->searchField.'%');
                    })
                    ->paginate();
                } else {
                    $cards = Card::where('contractor_uuid', '=', Auth::user()->contractor->uuid)->paginate();
                }
            }
           

            return View('card.index', [
                'cards' => $cards,
                'fields' => $this->fields           
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateCard()) {
            $months = Config::get('constants.months');
            $years = Config::get('constants.years');
            return View('card.create', ['months' => $months, 'years' => $years]);
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
        if (Auth::user()->canCreateCard()) {
            $this->validate($request, [
                'card_number' => 'required|string|required_with_all:exp_month,exp_year,cvc',
                'exp_month' => 'required|integer|required_with_all:card_number,exp_year,cvc',
                'exp_year' => 'required|integer|required_with_all:card_number,exp_month,cvc',
                'cvc' => 'required|integer|required_with_all:exp_month,exp_year,card_number',
                'default' => 'nullable|boolean',
                'active' => 'nullable|boolean',
            ]);

            try {
                DB::beginTransaction();
                //generate token stripe card
                if($request->filled('card_number')){
                    $token = Stripe::tokens()->create([
                        'card' => [
                            'number'    => $request->input('card_number'),
                            'exp_month' => (int) $request->input('exp_month'),
                            'cvc'       => (int) $request->input('cvc'),
                            'exp_year'  => (int) $request->input('exp_year'),
                            'address_city' => $request->input('address'),
                            'name' => $request->user()->name,
                        ],
                    ]);
                    $contractor = $request->user()->contractor;
                    //create stripe card for contractor
                    $card = Stripe::cards()->create($contractor->stripe_id,  $token['id']);
                    //change default card if filled
                    if($request->filled('default')){
                        $contractor->cards()->where('default', '=', 1)->update(['default' => 0]);
                    }
                    //save short info about card in cards table
                    $card = new Card([
                        'card_brand' => $card['brand'],
                        'card_last_four' => $card['last4'],
                        'default' => (int) $request->input("default"),
                        'active' => 1,
                        'contractor_uuid' => $contractor->uuid,
                        'stripe_id' => $card['id'],
                        'token' => $token['id'],
                        'exp_month' => (int) $request->input('exp_month'),
                        'exp_year' => (int) $request->input('exp_year'),
                    ]);
                    $card = $this->createRecord($card);
                }

                DB::commit();

                return $card;
            } catch (\Exception $e) {
                return $this->doOnException($e);
            }
        } else {
            Stripe::cards()->delete($contractor->stripe_id, $card['id']);
            DB::rollback();
            return $this->accessDenied();
        }
    }

   
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Card $card)
    {
        if (Auth::user()->canUpdateCard()) {
            $months = Config::get('constants.months');
            $years = Config::get('constants.years');
            return View('card.edit', [
                'card' => $card,
                'months' => $months,
                'years' => $years
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Card $card)
    {
        
        if (Auth::user()->canUpdateCard()) {
            $this->validate($request, [
                'card_number' => 'required|string|required_with_all:exp_month,exp_year',
                'exp_month' => 'required|integer|required_with_all:card_number,exp_year',
                'exp_year' => 'required|integer|required_with_all:card_number,exp_month',
                'default' => 'nullable|boolean',
                'active' => 'nullable|boolean',
            ]);

            try {
                DB::beginTransaction();
                $contractor = $request->user()->contractor;
                if($request->filled('card_number')){
                    $cardStripe = Stripe::cards()->update($contractor->stripe_id, $card->stripe_id, [
                        'exp_month' => (int) $request->input('exp_month'),
                        'exp_year' => (int) $request->input('exp_year'),
                    ]);
                    $card->exp_month = (int) $request->input('exp_month');
                    $card->exp_year = (int) $request->input('exp_year');
                    if($request->filled('default')){
                        $contractor->cards()->where('default', '=', 1)->first()->update(['default' => 0]);
                        $card->default = (int) $request->input('default');
                    }
                    $card->active = (int) $request->input('active');
                }


                $card = $this->updateRecord($card);

                DB::commit();

                return $card;

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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Card $card)
    {
        if (Auth::user()->canDeleteCard()) {

            Stripe::cards()->delete($card->contractor->stripe_id, $card->stripe_id);
            
            return $this->deleteRecord($card);
        } else {
            return $this->accessDenied();
        }
    }
}
