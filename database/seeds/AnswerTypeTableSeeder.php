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
                //'id' => 1,
                'uuid' => 'dd0841bc-73fa-423c-99dc-e2f56a476b0b',
                'answer_type' => 'CheckBox',
                'question_type_uuid' => '9f21912d-3506-468e-a2c4-56b8a5e8c686'
            ],
            [
                //'id' => 2,
                'uuid' => '42510871-baf9-4611-bcca-c72caae5e561',
                'answer_type' => 'Text/CheckBox',
                'question_type_uuid' => '9f21912d-3506-468e-a2c4-56b8a5e8c686'
            ],
            [
                //'id' => 3,
                'uuid' => 'a65f6762-924e-4025-bcc7-a188976dddf0',
                'answer_type' => 'Radio Button',
                'question_type_uuid' => '4cd9927e-717a-4726-b5e6-e6532201dfad'
            ],
            [
                //'id' => 4,
                'uuid' => 'ce5513f0-a1db-4fb8-a4a6-40f46aee841e',
                'answer_type' => 'Text/Radio Button',
                'question_type_uuid' => '4cd9927e-717a-4726-b5e6-e6532201dfad'
            ],
            [
                //'id' => 5,
                'uuid' => '97e79735-6c2c-493a-8729-a9d3a77bb549',
                'answer_type' => 'Date',
                'question_type_uuid' => '13559a7a-6eb0-45a0-a0df-1dc9a2b7913b'
            ],
            [
                //'id' => 6,
                'uuid' => 'f91304b3-2ddd-4655-b406-afbaef969bc5',
                'answer_type' => 'Time',
                'question_type_uuid' => '13559a7a-6eb0-45a0-a0df-1dc9a2b7913b'
            ],
            [
                //'id' => 7,
                'uuid' => '37060fc0-025e-46a7-9256-b5f9ef453ace',
                'answer_type' => 'Date Time',
                'question_type_uuid' => '13559a7a-6eb0-45a0-a0df-1dc9a2b7913b'
            ],
            [
                //'id' => 8,
                'uuid' => '8afff7b5-5283-4f15-a878-63780b9bdfc6',
                'answer_type' => 'Integer',
                'question_type_uuid' => '13559a7a-6eb0-45a0-a0df-1dc9a2b7913b'
            ],
            [
                //'id' => 9,
                'uuid' => 'c0251803-9c72-4b8a-b565-216bcfddf4fb',
                'answer_type' => 'Decimal',
                'question_type_uuid' => '13559a7a-6eb0-45a0-a0df-1dc9a2b7913b'
            ],
            [
                //'id' => 10,
                'uuid' => '9b6b050e-1624-4b2e-a6b1-ec37c42271b0',
                'answer_type' => 'Short Text',
                'question_type_uuid' => '13559a7a-6eb0-45a0-a0df-1dc9a2b7913b'
            ],
            [
                //'id' => 11,
                'uuid' => '72b4d9cc-b8a4-4d62-bdbb-50c92bcbbf31',
                'answer_type' => 'Long Text',
                'question_type_uuid' => '13559a7a-6eb0-45a0-a0df-1dc9a2b7913b'
            ],
        ]);
    }
}
