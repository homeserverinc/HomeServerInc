<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Subscription;
use App\Charge;

class DebitPlansPriceWalletContractors extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'debitplan';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Debit of the specific price of the plan designated for a contractor.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $subs = Subscription::whereHas('plan', function($query){
            $query->where('plans.interval', '!=', 'lead');
        })->whereDate('ends_at', '=', \Carbon\Carbon::today())->where('closed', '=', 0)->get();
        foreach($subs as $sub){
            if($sub->contractor->wallet >= $sub->plan->price){
                $sub->contractor->decrement('wallet', $sub->plan->price);
                $charge = new Charge([
                    'amount' => -(float) $sub->plan->price,
                    'contractor_uuid' => $sub->contractor->uuid,
                    'stripe_id' => null,
                    'description' => 'Plan '.$plan->name.' renovated: -$'.((float) $plan->price).' to '.$contractor->user->name.'.',
                    'card_uuid' => $sub->contractor->default_card()->first()->uuid
                ]);
                $charge->save();
                switch ($sub->plan->interval) {
                    case 'day':
                    $ends_at = \Carbon\Carbon::today()->addDays($sub->plan->interval_count);
                    break;
                    case 'week':
                    $ends_at = \Carbon\Carbon::today()->addWeeks($sub->plan->interval_count);
                    break;
                    case 'year':
                    $ends_at = \Carbon\Carbon::today()->addYears($sub->plan->interval_count);
                    break;
                    default:
                    $ends_at = \Carbon\Carbon::today()->addWeeks(1);
                    break;
                }
                $sub->update(['ends_at' => $ends_at]);

            }else{
                if($sub->contractor->wallet <= $sub->contractor->automatic_recharge_trigger){
                    try {
                        $stripeCharge = Stripe::charges()->create([
                            'customer' => $sub->contractor->stripe_id,
                            'currency' => 'USD',
                            'amount'   => (float) $sub->contractor->automatic_recharge_amount,
                        ]);
                        $charge = new Charge([
                            'amount' => -(float) $sub->contractor->automatic_recharge_amount,
                            'contractor_uuid' => $sub->contractor->uuid,
                            'stripe_id' => $stripeCharge['id'],
                            'description' => 'Automatic recharge trigger: $'.((float) $sub->contractor->automatic_recharge_amount).' to '.$sub->contractor->user->name.'.',
                            'card_uuid' => $sub->contractor->default_card()->first()->uuid
                        ]);
                        $charge->save();
                        $sub->contractor->increment('wallet', (float) $sub->contractor->automatic_recharge_amount);
                    } catch(\Stripe\Error\Card $e) {
                        // Since it's a decline, \Stripe\Error\Card will be caught
                        $body = $e->getJsonBody();
                        $err  = $body['error'];

                        if($contractor->payment_attempts < 3)
                            $contractor->increment('payment_attempts', 1);
                        else
                            $contractor->update(['active' => 0, 'block_reason' => $err['message']]);
                        $sub->update(['closed' => 1]);
                        break;
                    } catch(\Exception $e){
                        if($contractor->payment_attempts < 3)
                            $contractor->increment('payment_attempts', 1);
                        else
                            $contractor->update(['active' => 0, 'block_reason' => $e->getMessage()]);
                        break;
                    }
                }
                if($sub->contractor->wallet >= $sub->plan->price){
                    $sub->contractor->decrement('wallet', $sub->plan->price);
                    $charge = new Charge([
                        'amount' => -(float) $sub->plan->price,
                        'contractor_uuid' => $sub->contractor->uuid,
                        'stripe_id' => null,
                        'description' => 'Plan '.$plan->name.' renovated: -$'.((float) $plan->price).' to '.$contractor->user->name.'.',
                        'card_uuid' => $sub->contractor->default_card()->first()->uuid
                    ]);
                    $charge->save();
                    switch ($sub->plan->interval) {
                        case 'day':
                        $ends_at = \Carbon\Carbon::today()->addDays($sub->plan->interval_count);
                        break;
                        case 'week':
                        $ends_at = \Carbon\Carbon::today()->addWeeks($sub->plan->interval_count);
                        break;
                        case 'year':
                        $ends_at = \Carbon\Carbon::today()->addYears($sub->plan->interval_count);
                        break;
                        default:
                        $ends_at = \Carbon\Carbon::today()->addWeeks(1);
                        break;
                    }
                    $sub->update(['ends_at' => $ends_at]);
                }else{
                    if($sub->contractor->payment_attempts < 3)
                        $sub->contractor->increment('payment_attempts', 1);
                    else
                        $sub->contractor->update(['active' => 0, 'block_reason' => 'Insufficient funds to renew the plan.']);
                    $sub->update(['closed' => 1]);
                }
            }
        }
    }
}
