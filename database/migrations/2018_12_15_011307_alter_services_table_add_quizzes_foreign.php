<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterServicesTableAddQuizzesForeign extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('services', function (Blueprint $table) {
            $table->uuid('quiz_uuid')->index()->nullable()->after('category_uuid');
            $table->foreign('quiz_uuid')->references('uuid')->on('quizzes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropForeign('services_quiz_uuid_foreign');
            $table->dropColumn('quiz_uuid');
        });
    }
}
