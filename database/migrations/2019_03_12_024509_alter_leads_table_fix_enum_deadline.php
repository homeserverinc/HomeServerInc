<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterLeadsTableFixEnumDeadline extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('leads', function (Blueprint $table) {
            $table->dropColumn('deadline');
        });

        Schema::table('leads', function (Blueprint $table) {
            $table->enum('deadline', [
                'im-flexible', 'within-48-hours', 'within-a-week', 'within-a-month', 'within-a-year'
            ])->after('quiz_uuid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('leads', function (Blueprint $table) {
            $table->dropColumn('deadline');
        });

        Schema::table('leads', function (Blueprint $table) {
            $table->enum('deadline', [
                'im-flexible', 'within-48-hours', 'within-a-week', 'wihtin-a-month', 'within-a-year'
            ])->after('quiz_uuid');
        });
    }
}
