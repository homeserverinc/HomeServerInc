<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterQuestionsTableChangeQuestionTypeForeign extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('questions', function (Blueprint $table) {
            $table->dropColumn('question_type_id');
            $table->uuid('question_type_uuid')->after('uuid');
            $table->foreign('question_type_uuid')->references('uuid')->on('question_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('questions', function (Blueprint $table) {
            $table->dropForeign('questions_question_type_uuid_foreign');
            $table->dropColumn('question_type_uuid');
            $table->unsignedInteger('question_type_id')->after('uuid');
            $table->foreign('question_type_id')->references('id')->on('question_types');
        });
    }
}
