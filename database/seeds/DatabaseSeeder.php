<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            StatesTableSeeder::class,
            CitiesTableSeeder::class,
            LaratrustSeeder::class,
            AgentStatusesTableSeeder::class,
            PermissionsTableSeeder::class,
            PropertyTypesTableSeeder::class,
            CustomersTableSeeder::class,
            QuestionTypeTableSeeder::class,
            LanguagesTableSeeder::class,
            TwilioConfigurationsTableSeeder::class
        ]);
        //$this->call(LaratrustSeeder::class);
        //$this->call(LaratrustSeeder::class);
    }
}
