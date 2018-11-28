<?php

use Illuminate\Database\Seeder;

class PropertyTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncatePropertyTypesTable();

        DB::table('property_types')->insert([
            [
                'property_type_name' => 'string',
                'property_type_description' => 'Short Text'
            ],
            [
                'property_type_name' => 'text',
                'property_type_description' => 'Long Text'
            ],
            [
                'property_type_name' => 'integer',
                'property_type_description' => 'Integer'
            ],
            [
                'property_type_name' => 'decimal',
                'property_type_description' => 'Decimal'
            ],
            [
                'property_type_name' => 'date',
                'property_type_description' => 'Date'
            ],
            [
                'property_type_name' => 'time',
                'property_type_description' => 'Time'
            ],
            [
                'property_type_name' => 'datetime',
                'property_type_description' => 'Date and Time'
            ],
            [
                'property_type_name' => 'boolean',
                'property_type_description' => 'True or False'
            ],
            [
                'property_type_name' => 'list',
                'property_type_description' => 'List of items'
            ],
        ]);
    }

    protected function truncatePropertyTypesTable() {
        Schema::disableForeignKeyConstraints();
        DB::table('property_types')->truncate();
        \App\PropertyType::truncate();
        Schema::enableForeignKeyConstraints();
    }
}
