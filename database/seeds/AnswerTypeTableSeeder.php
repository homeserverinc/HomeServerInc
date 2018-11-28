<?php

use Illuminate\Database\Seeder;

class AnswerTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('answer_types')->insert([
            [
                'id' => 1,
                'answer_type' => 'CheckBox',
                'question_type_id' => 1
            ],
            [
                'id' => 2,
                'answer_type' => 'Text/CheckBox',
                'question_type_id' => 1
            ],
            [
                'id' => 3,
                'answer_type' => 'Radio Button',
                'question_type_id' => 2
            ],
            [
                'id' => 4,
                'answer_type' => 'Text/Radio Button',
                'question_type_id' => 2
            ],
            [
                'id' => 6,
                'answer_type' => 'Date',
                'question_type_id' => 3
            ],
            [
                'id' => 7,
                'answer_type' => 'Time',
                'question_type_id' => 3
            ],
            [
                'id' => 8,
                'answer_type' => 'Date Time',
                'question_type_id' => 3
            ],
            [
                'id' => 9,
                'answer_type' => 'Integer',
                'question_type_id' => 3
            ],
            [
                'id' => 10,
                'answer_type' => 'Decimal',
                'question_type_id' => 3
            ],
            [
                'id' => 11,
                'answer_type' => 'Short Text',
                'question_type_id' => 3
            ],
            [
                'id' => 12,
                'answer_type' => 'Long Text',
                'question_type_id' => 3
            ],
        ]);
    }
}
