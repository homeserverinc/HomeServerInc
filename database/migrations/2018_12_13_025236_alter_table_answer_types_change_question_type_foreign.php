<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableAnswerTypesChangeQuestionTypeForeign extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('answer_types', function (Blueprint $table) {
            $table->dropColumn('question_type_id');
            $table->uuid('question_type_uuid')->after('answer_type');
            $table->foreign('question_type_uuid')->references('uuid')->on('question_types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('answer_types', function (Blueprint $table) {
            $table->dropForeign('answer_types_question_type_uuid_foreign');
            $table->dropColumn('question_type_uuid');
            $table->unsignedInteger('question_type_id')->after('answer_type');
            $table->foreign('question_type_id')->references('id')->on('question_types')->onDelete('cascade');
        });
    }
}
