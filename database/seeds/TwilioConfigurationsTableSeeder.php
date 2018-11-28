<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TwilioConfigurationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (\App\TwilioConfiguration::count() == 0) {
            DB::table('twilio_configurations')->insert([
                'id' => 1
            ]);
        }
    }
}
