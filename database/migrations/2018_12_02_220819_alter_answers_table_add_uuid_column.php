<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterAnswersTableAddUuidColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('answers', function (Blueprint $table) {
            $table->dropColumn('id')
                  ->dropPrimary('id');

            $table->uuid('uuid')->primary()->first();

            $table->dropColumn('next_question_id');
            $table->uuid('next_question_uuid')->nullable()->after('value');
            $table->foreign('next_question_uuid')->references('uuid')->on('questions');
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
            $table->dropForeign('answers_quetion_uuid_foreign');
            $table->dropColumn('next_question_uuid');
            $table->dropColumn('uuid');
            $table->integer('next_question_id')->after('value')->unsigned();
            $table->foreign('next_question_id')->references('id')->on('questions');
        });
    }
}
