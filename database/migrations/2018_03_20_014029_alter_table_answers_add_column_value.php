<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableAnswersAddColumnValue extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('answers', function (Blueprint $table) {
            $table->integer('answer_type_id')->nullable()->unsigned()->after('answer');
            $table->text('value')->nullable()->after('answer_type_id');
            $table->foreign('answer_type_id')->references('id')->on('answer_types')->onDelete('cascade');
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
            $table->dropColumn('value');
            $table->dropColumn('answer_type_id');
            $table->dropForeign('answers_answer_type_id_foreign');
        });
    }
}
