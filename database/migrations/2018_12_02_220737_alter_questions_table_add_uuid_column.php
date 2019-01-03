<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterQuestionsTableAddUuidColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->truncateTable();
        
        Schema::table('answers', function(Blueprint $table) {
            $table->dropForeign('answers_question_id_foreign');
        });
        Schema::table('services', function(Blueprint $table) {
            $table->dropForeign('services_question_id_foreign');
        });
        Schema::table('questions', function (Blueprint $table) {
            $table->dropColumn('id')
                  ->dropPrimary('id');
            $table->uuid('uuid')->primary()->first();
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
            if (Schema::hasColumn('questions', 'uuid')) {
                $table->dropColumn('uuid');
            }
        });
    }

    /**
     * Truncate data in table before alter his structure
     *
     * @return void
     */
    public function truncateTable() {
        Schema::disableForeignKeyConstraints();
        DB::table('questions')->truncate();
        DB::table('answers')->truncate();
        Schema::enableForeignKeyConstraints();
    }
}
