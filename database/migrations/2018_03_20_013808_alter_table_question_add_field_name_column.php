<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableQuestionAddFieldNameColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('questions', function (Blueprint $table) {
            $table->string('field_name')->after('question');
            $table->integer('field_size')->default(12)->after('field_name');
            $table->integer('question_type_id')->nullable()->unsigned();
            $table->foreign('question_type_id')->references('id')->on('question_types')->onDelete('cascade');
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
            $table->dropColumn('field_type');
            $table->dropColumn('field_name');
            $table->dropColumn('question_type_id');
            $table->dropForeign('questions_question_type_id_foreign');
        });
    }
}
