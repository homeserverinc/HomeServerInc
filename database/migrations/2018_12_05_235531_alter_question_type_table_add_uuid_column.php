<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterQuestionTypeTableAddUuidColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->truncateTable();
        Schema::table('answer_types', function (Blueprint $table) {
            $table->dropForeign('answer_types_question_type_id_foreign');
        });

        Schema::table('questions', function (Blueprint $table) {
            $table->dropForeign('questions_question_type_id_foreign');
        });

        Schema::table('question_types', function (Blueprint $table) {
            if (Schema::hasColumn('question_types', 'id')) {
                $table->dropColumn('id')
                      ->dropPrimary('id');
            }
            if (!Schema::hasColumn('question_types', 'uuid')) {
                $table->uuid('uuid')->primary()->before('question_type');   
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('question_types', function (Blueprint $table) {
            if (Schema::hasColumn('question_types', 'uuid')) {
                $table->dropColumn('uuid');
            }
        });
    }

    /**
     * Truncate data in table before alter his structure
     *
     * @return void
     */
    public function truncateTable() {
        Schema::disableForeignKeyConstraints();
        DB::table('question_types')->truncate();
        DB::table('answer_types')->truncate();
        Schema::enableForeignKeyConstraints();
    }
}
