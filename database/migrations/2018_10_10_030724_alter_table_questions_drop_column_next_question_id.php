<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableQuestionsDropColumnNextQuestionId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('questions', function (Blueprint $table) {
            $table->dropForeign('questions_next_question_id_foreign');
            $table->dropColumn('next_question_id');
            $table->dropColumn('field_size');
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
            $table->integer('field_size')->default(12)->after('field_name');
            $table->unsignedInteger('next_question_id')->nullable()->after('field_size');
            $table->foreign('next_question_id')->references('id')->on('questions');
        });
    }
}
