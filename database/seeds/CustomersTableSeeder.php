<?php

use Illuminate\Database\Seeder;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncateCustomersTable();
        factory(App\Customer::class, 50)->create();
    }

    public function truncateCustomersTable()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('customers')->truncate();
        \App\Customer::truncate();        
        Schema::enableForeignKeyConstraints();
    }
}
