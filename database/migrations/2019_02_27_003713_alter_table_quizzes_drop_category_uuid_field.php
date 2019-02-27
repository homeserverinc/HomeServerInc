<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableQuizzesDropCategoryUuidField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (\App\Quiz::all() as $quiz) {
            $category = \App\Category::find($quiz->category_uuid);
            $category->quiz_uuid = $quiz->uuid;
            $category->save();
        }

        Schema::table('quizzes', function (Blueprint $table) {
            $table->dropColumn('category_uuid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('quizzes', function (Blueprint $table) {
            $table->uuid('category_uuid')->index()->after('quiz');
        });

        foreach (\App\Category::all() as $category) {
            $quiz = \App\Quiz::find($category->quiz_uuid);
            $quiz->category_uuid = $category->uuid;
            $quiz->save();
        }
    }
}
