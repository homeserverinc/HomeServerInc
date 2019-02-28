<?php

namespace App\Listeners;

use App\Contractor;
use App\Plan;
use App\Charge;
use App\Events\AssociateLeads;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

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
        foreach($event->lead->category->contractors->sortBy('leads.created_at') as $contractor){
            if($contractor->plan){
                if($event->lead->category_lead->uuid == $contractor->plan->category_lead->uuid){
                    if($contractor->subscription->ends_at <= \Carbon\Carbon::today() && $contractor->subscription->closed == 0){
                        switch ($contractor->plan->interval) {
                            case 'day':
                                $plan_begin = $contractor->subscription->ends_at->subDays($contractor->plan->interval_count);
                                break;
                            case 'week':
                                $plan_begin = $contractor->subscription->ends_at->subWeeks($contractor->plan->interval_count);
                                break;
                            case 'year':
                                $plan_begin = $contractor->subscription->ends_at->subYears($contractor->plan->interval_count);
                                break;
                            
                            default:
                                $plan_begin = $contractor->subscription->ends_at->subWeeks($contractor->plan->interval_count);
                                break;
                        }
                        $plan_end = $contractor->subscription->ends_at;
                        $amount_recived = $contractor->leads()->whereBetween('created_at', [$plan_begin, $plan_end])->count();
                        if($amount_recived < $contractor->plan->qnt_leads){
                            if($contractor->plan->unique_leads){
                                $contractor->leads()->attach($event->lead);
                                break;
                            }else{
                                if($count < $contractor->plan->share_count){
                                    $contractor->leads()->attach($event->lead);
                                    $count++;
                                }
                            }
                        }
                    }
                }
            }else{
                $price = $event->lead->category->category_leads()->where('category_lead_uuid', '=', $event->lead->category_lead->uuid)->first()->pivot->price;
                if($contractor->wallet >= $price){
                    $contractor->leads()->attach($event->lead);
                     $charge = new Charge([
                        'amount' => -(float) $price,
                        'contractor_uuid' => $contractor->uuid,
                        'stripe_id' => null,
                        'description' => 'New Lead '.$event->lead->category_lead->name.' assigned : -$'.((float) $price).' to '.$contractor->user->name.'.',
                        'card_uuid' => $contractor->default_card()->first()->uuid
                    ]);

                    $charge->save();
                    $contractor->decrement('wallet', (float) $price);

                }
            }
        }
    }
}
