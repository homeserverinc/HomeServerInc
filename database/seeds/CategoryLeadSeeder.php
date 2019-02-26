<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\CategoryLead;
class CategoryLeadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CategoryLead::create(['name' => 'Very Small']);
        CategoryLead::create(['name' => 'Small']);
        CategoryLead::create(['name' => 'Medium']);
        CategoryLead::create(['name' => 'Large']);
        CategoryLead::create(['name' => 'Extra Large']);
    
    }
}
