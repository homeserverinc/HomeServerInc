<?php

use Illuminate\Database\Seeder;

class QuestionTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('question_types')->insert([
            [
                'id' => 1,
                'question_type' => 'Multiple choice'
            ],
            [
                'id' => 2,
                'question_type' => 'Single choice'
            ],
            [
                'id' => 3,
                'question_type' => 'Custom Data'
            ]
        ]);
    }
}
