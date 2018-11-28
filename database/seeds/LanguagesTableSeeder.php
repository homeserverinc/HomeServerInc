<?php

use Illuminate\Database\Seeder;

class LanguagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('languages')->insert([
            [
                'id' => 1,
                'language' => 'English',
                'acronym' => 'en'
            ],
            [
                'id' => 2,
                'language' => 'Spanish',
                'acronym' => 'es'
            ],
        ]);
    }
}
