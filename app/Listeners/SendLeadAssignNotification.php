<?php

namespace App\Listeners;

use App\Contractor;
use App\Plan;
use App\Charge;
use App\Events\AssociateLeads;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Mail\LeadAssigned;
use Illuminate\Support\Facades\Mail;

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

    /**
     * Handle the event.
     *
     * @param  AssociateLeads  $event
     * @return void
     */
    public function handle(AssociateLeads $event)
    {   
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
                                if($contractor->plan->unique_leads){
                                    $contractor->leads()->syncWithoutDetaching($event->lead);
                                    Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
                                    break;
                                }else{
                                    if($count < $contractor->plan->share_count){
                                        $contractor->leads()->syncWithoutDetaching($event->lead);
                                        Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
                                        $count++;
                                    }
                                }
                            }
                        }
                    }else{
                        //get lead price
                        $price = $event->lead->category->category_leads()->where('category_lead_uuid', '=', $event->lead->category_lead->uuid)->first()->pivot->price;
                        //if has enough in wallet
                        if($contractor->wallet >= $price){
                            //if plan is unique leads
                            if($contractor->plan->unique_leads){
                                $contractor->leads()->syncWithoutDetaching($event->lead);
                                Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
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
                                break;
                            }else{
                                //if the leads assignment is less then the share count and the qnt leads 
                                if($count < $contractor->plan->share_count && $count < $contractor->plan->qnt_leads){
                                    $contractor->leads()->syncWithoutDetaching($event->lead);
                                    Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
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
                                }
                            }
                            
                        }else{
                            //if dont have enough to lead, check to do the automatic recharge and reedo
                            if($contractor->wallet <= $contractor->automatic_recharge_trigger){
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
                                //if has enough in wallet
                                if($contractor->wallet >= $price){
                                    //if plan is unique leads
                                    if($contractor->plan->unique_leads){
                                        $contractor->leads()->syncWithoutDetaching($event->lead);
                                        Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
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
                                        break;
                                    }else{
                                        //if the leads assignment is less then the share count and the qnt leads 
                                        if($count < $contractor->plan->share_count && $count < $contractor->plan->qnt_leads){
                                            $contractor->leads()->syncWithoutDetaching($event->lead);
                                            Mail::to($contractor->user->email)->send(new LeadAssigned($event->lead));
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
}
