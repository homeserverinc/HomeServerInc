<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterAnswerTypeTableAddUuidColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->truncateTable();
        Schema::table('answers', function (Blueprint $table) {
            $table->dropForeign('answers_answer_type_id_foreign');
        });
        Schema::table('answer_types', function (Blueprint $table) {
            if (Schema::hasColumn('answer_types', 'id')) {
                $table->dropColumn('id')
                      ->dropPrimary('id');
            }
            if (!Schema::hasColumn('answer_types', 'uuid')) {
                $table->uuid('uuid')->primary()->first();
            }
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
            if (Schema::hasColumn('answer_types', 'uuid')) {
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
        DB::table('answer_types')->truncate();
        DB::table('question_types')->truncate();
        Schema::enableForeignKeyConstraints();
    }
}
