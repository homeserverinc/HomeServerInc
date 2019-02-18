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
        $this->truncaQuestionTypeTables();
        
        DB::table('question_types')->insert([
            [
                'uuid' => '9f21912d-3506-468e-a2c4-56b8a5e8c686',
                'question_type' => 'Multiple choice',
                'single_choice' => false
            ],
            [
                'uuid' => '4cd9927e-717a-4726-b5e6-e6532201dfad',
                'question_type' => 'Single choice',
                'single_choice' => true
            ],
            [
                'uuid' => '13559a7a-6eb0-45a0-a0df-1dc9a2b7913b',
                'question_type' => 'Custom Data',
                'single_choice' => false
            ]
        ]);
    }

    public function truncaQuestionTypeTables()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('question_types')->truncate();
        DB::table('answer_types')->truncate();
        \App\QuestionType::truncate();
        \App\AnswerType::truncate();
        Schema::enableForeignKeyConstraints();
    }
}
