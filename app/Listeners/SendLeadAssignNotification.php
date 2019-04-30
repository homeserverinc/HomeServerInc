<?php

namespace App\Listeners;

use App\Contractor;
use App\Plan;
use App\Charge;
use App\Customer;
use App\FilteredLead;
use App\Events\NewLeadSms;
use App\Events\AssociateLeads;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Mail\LeadAssigned;
use Illuminate\Support\Facades\Mail;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;

class SendLeadAssignNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    private function badWords($lead){
        $guzzle = new Client();
        $data = collect($lead->customer->toArray())->values()->filter()->toArray();
        $res = $guzzle->request('POST', 'https://neutrinoapi-bad-word-filter.p.rapidapi.com/bad-word-filter', [
            'form_params' => [
                "censor-character" => "*",
                "content" => json_encode($data)
            ],
            'headers' => [
                "X-RapidAPI-Key" => "8c40d0ba28mshea62c874b3a0db9p130a97jsn540b562b5b44",
                "Content-Type" => "application/x-www-form-urlencoded"
            ]
        ]);
        $response = json_decode($res->getBody()->getContents(), true);
        if($response['is-bad']){
            $lead->verified_data = 0;
            $lead->closed = 0;
            $lead->update();
            FilteredLead::create([
                'user_id' => null,
                'lead_uuid' => $lead->uuid,
                'reason' => 'Bad words',
            ]);
            return true;
        }
        return false;
    }

    private function duplicity($lead){
        try{
            $customer = Customer::where('first_name', '=', $lead->customer->first_name)
            ->where('last_name', '=', $lead->customer->last_name)
            ->where('phone1', '=', $lead->customer->phone1)
            ->where('email1', '=', $lead->customer->email1)
            ->whereBetween('created_at', [\Carbon\Carbon::today()->subDays(2), \Carbon\Carbon::today()])
            ->firstOrFail();

            $lead->verified_data = 0;
            $lead->closed = 0;
            $lead->update();
            FilteredLead::create([
                'user_id' => null,
                'lead_uuid' => $lead->uuid,
                'reason' => 'Duplicity',
            ]);
            
            return true;
        }catch(\Exception $e){
            return false;
        }
    }

    /**
     * Handle the event.
     *
     * @param  AssociateLeads  $event
     * @return void
     */
    public function handle(AssociateLeads $event)
    {      
        //verify if is all ok
        if(!$this->badWords($event->lead) && !$this->duplicity($event->lead) && $event->lead->verified_data && $event->lead->closed){
            $count = 0;
            //sorted by last assigned lead to contractor
            foreach($event->lead->category->contractors->sortBy('leads.created_at') as $contractor){
                //if contractor has plan and is activated
                if($contractor->plan && $contractor->active){
                    //if category lead is in plan category leads
                    if($contractor->plan->category_leads->contains($event->lead->category_lead_uuid)){
                        $plan_end = $contractor->subscriptions->where('closed','=',0)->first()->ends_at;
                        //plan end must be null if interval is by lead
                        if($plan_end !== null && $contractor->plan->interval !== 'lead'){
                            //if subscription not ended
                            if($plan_end >= \Carbon\Carbon::today() ){
                                //get date when begin
                                switch ($contractor->plan->interval) {
                                    case 'day':
                                        $plan_begin = $plan_end->copy()->subDays($contractor->plan->interval_count);
                                        break;

                                    case 'week':
                                        $plan_begin = $plan_end->copy()->subWeeks($contractor->plan->interval_count);
                                        break;

                                    case 'year':
                                        $plan_begin = $plan_end->copy()->subYears($contractor->plan->interval_count);
                                        break;
                                    
                                    default:
                                        $plan_begin = $plan_end->copy()->subWeeks($contractor->plan->interval_count);
                                        break;
                                }
                                //get count of received leads between plan begin and plan end
                                $amount_recived = $contractor->leads->whereBetween('created_at', [$plan_begin, $plan_end])->count();
                                //if this count is less then plan qtd leads
                                if($amount_recived < $contractor->plan->qnt_leads){
                                    if($contractor->plan->unique_leads || $event->lead->unique){
                                        $contractor->leads()->syncWithoutDetaching($event->lead);
                                        Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
                                        event(new NewLeadSms($contractor->phone, $event->lead->customer->first_name, $event->lead->customer->last_name, $event->lead->customer->street, $event->lead->customer->phone1 ));
                                        break;
                                    }else{
                                        if($count < $contractor->plan->share_count){
                                            $contractor->leads()->syncWithoutDetaching($event->lead);
                                            Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
                                            event(new NewLeadSms($contractor->phone, $event->lead->customer->first_name, $event->lead->customer->last_name, $event->lead->customer->street, $event->lead->customer->phone1 ));
                                            $count++;
                                        }
                                    }
                                }
                            }
                        }else{
                            //get lead price
                            $price = $event->lead->category->category_leads()->where('category_lead_uuid', '=', $event->lead->category_lead->uuid)->first()->pivot->price;
                            //new rule = if is by lead, take the individual price of category_lead and divide by 4.8
                            if($contractor->plan->interval === 'lead')
                                $price = round($price / 4.8, 2);
                            //if has enough in wallet
                            if($contractor->wallet >= $price){
                                //if plan is unique leads
                                if($contractor->plan->unique_leads || $event->lead->unique){
                                    $contractor->leads()->syncWithoutDetaching($event->lead);
                                    $contractor->decrement('wallet', (float) $price);
                                    $count++;
                                    $charge = new Charge([
                                        'amount' => -(float) $price,
                                        'contractor_uuid' => $contractor->uuid,
                                        'stripe_id' => null,
                                        'description' => 'New Lead '.$event->lead->category_lead->name.' assigned : -$'.((float) $price).' to '.$contractor->user->name.'.',
                                        'card_uuid' => $contractor->default_card()->first()->uuid
                                    ]);
                                    $charge->save();
                                    Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
                                    event(new NewLeadSms($contractor->phone, $event->lead->customer->first_name, $event->lead->customer->last_name, $event->lead->customer->street, $event->lead->customer->phone1 ));
                                    break;
                                }else{
                                    //if the leads assignment is less then the share count and the qnt leads 
                                    if($contractor->plan->qnt_leads == null || $contractor->plan->qnt_leads == 0 || $count < $contractor->plan->share_count && $count < $contractor->plan->qnt_leads){
                                        $contractor->leads()->syncWithoutDetaching($event->lead);
                                        $contractor->decrement('wallet', (float) $price);
                                        $count++;
                                        $charge = new Charge([
                                            'amount' => -(float) $price,
                                            'contractor_uuid' => $contractor->uuid,
                                            'stripe_id' => null,
                                            'description' => 'New Lead '.$event->lead->category_lead->name.' assigned : -$'.((float) $price).' to '.$contractor->user->name.'.',
                                            'card_uuid' => $contractor->default_card()->first()->uuid
                                        ]);
                                        $charge->save();
                                        Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
                                        event(new NewLeadSms($contractor->phone, $event->lead->customer->first_name, $event->lead->customer->last_name, $event->lead->customer->street, $event->lead->customer->phone1 ));
                                    }
                                }
                                
                            }else{
                                //if dont have enough to lead, check to do the automatic recharge and reedo
                                if($contractor->wallet <= $contractor->automatic_recharge_trigger){
                                    try {
                                        $stripeCharge = Stripe::charges()->create([
                                            'customer' => $contractor->stripe_id,
                                            'currency' => 'USD',
                                            'amount'   => (float) $contractor->automatic_recharge_amount,
                                        ]);
                                         $charge = new Charge([
                                            'amount' => -(float) $contractor->automatic_recharge_amount,
                                            'contractor_uuid' => $contractor->uuid,
                                            'stripe_id' => $stripeCharge['id'],
                                            'description' => 'Automatic recharge trigger: $'.((float) $contractor->automatic_recharge_amount).' to '.$contractor->user->name.'.',
                                            'card_uuid' => $contractor->default_card()->first()->uuid
                                        ]);
                                        $charge->save();
                                        $contractor->increment('wallet', (float) $contractor->automatic_recharge_amount);
                                    } catch(\Stripe\Error\Card $e) {
                                        // Since it's a decline, \Stripe\Error\Card will be caught
                                        $body = $e->getJsonBody();
                                        $err  = $body['error'];

                                        if($contractor->payment_attempts < 3)
                                            $contractor->increment('payment_attempts', 1);
                                        else
                                            $contractor->update(['active' => 0, 'block_reason' => $err['message']]);

                                        break;
                                    } catch(\Exception $e){
                                        if($contractor->payment_attempts < 3)
                                            $contractor->increment('payment_attempts', 1);
                                        else
                                            $contractor->update(['active' => 0, 'block_reason' => $e->getMessage()]);
                                        break;
                                    }

                                    //if has enough in wallet
                                    if($contractor->wallet >= $price){
                                        //if plan is unique leads
                                        if($contractor->plan->unique_leads || $event->lead->unique){
                                            $contractor->leads()->syncWithoutDetaching($event->lead);
                                            $contractor->decrement('wallet', (float) $price);
                                            $count++;
                                            $charge = new Charge([
                                                'amount' => -(float) $price,
                                                'contractor_uuid' => $contractor->uuid,
                                                'stripe_id' => null,
                                                'description' => 'New Lead '.$event->lead->category_lead->name.' assigned : -$'.((float) $price).' to '.$contractor->user->name.'.',
                                                'card_uuid' => $contractor->default_card()->first()->uuid
                                            ]);
                                            Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
                                            event(new NewLeadSms($contractor->phone, $event->lead->customer->first_name, $event->lead->customer->last_name, $event->lead->customer->street, $event->lead->customer->phone1 ));
                                            $charge->save();
                                            break;
                                        }else{
                                            //if the leads assignment is less then the share count and the qnt leads 
                                            if($count < $contractor->plan->share_count && $count < $contractor->plan->qnt_leads){
                                                $contractor->leads()->syncWithoutDetaching($event->lead);
                                                $contractor->decrement('wallet', (float) $price);
                                                $count++;
                                                $charge = new Charge([
                                                    'amount' => -(float) $price,
                                                    'contractor_uuid' => $contractor->uuid,
                                                    'stripe_id' => null,
                                                    'description' => 'New Lead '.$event->lead->category_lead->name.' assigned : -$'.((float) $price).' to '.$contractor->user->name.'.',
                                                    'card_uuid' => $contractor->default_card()->first()->uuid
                                                ]);
                                                $charge->save();
                                                Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
                                                event(new NewLeadSms($contractor->phone, $event->lead->customer->first_name, $event->lead->customer->last_name, $event->lead->customer->street, $event->lead->customer->phone1 ));
                                            }
                                        }
                                        
                                    }else{
                                        //attempts counter +1
                                        if($contractor->payment_attempts < 3)
                                            $contractor->increment('payment_attempts', 1);
                                        else
                                            $contractor->update(['active' => 0]);
                                    }
                                }
                            }   
                        }
                    }
                }
            }
        }
    }
}
