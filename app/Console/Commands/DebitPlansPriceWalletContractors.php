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
        
        $subs = Subscription::whereDate('ends_at', '=', \Carbon\Carbon::today())->where('closed', '=', 0)->get();
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
                $sub->update(['ends_at' => \Carbon\Carbon::today()->addWeeks(1)]);

            }
        }


    }
}
