<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuizzesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quizzes', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->string('quiz');
            $table->uuid('category_uuid')->index();
            $table->uuid('first_question_uuid')->index()->nullable();
            $table->foreign('first_question_uuid')->references('uuid')->on('questions')->onDelete('cascade');
            $table->foreign('category_uuid')->references('uuid')->on('categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quizzes');
    }
}
