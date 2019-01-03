<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterAnswersTableChangeForeignQuestionColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('answers', function (Blueprint $table) {  
            $table->dropColumn('question_id');
            $table->dropColumn('answer_type_id');
            $table->uuid('question_uuid')->after('value');
            $table->foreign('question_uuid')->references('uuid')->on('questions')->onDelete('cascade');
            $table->uuid('answer_type_uuid')->after('answer_order');
            $table->foreign('answer_type_uuid')->references('uuid')->on('answer_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('answers', function (Blueprint $table) {
            $table->dropForeign('answers_question_uuid_foreign');
            $table->dropForeign('answers_answer_type_uuid_foreign');
            $table->dropColumn('question_uuid');
            $table->dropColumn('answer_type_uuid');
            $table->unsignedInteger('question_id')->after('value');
            $table->foreign('question_id')->references('id')->on('questions')->onDelete('cascade');
            $table->unsignedInteger('answer_type_id')->before('value');
            $table->foreign('answer_type_id')->references('id')->on('answer_types');
        });
    }
}
