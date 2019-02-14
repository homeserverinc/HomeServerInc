<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DropMissedCallsTableSiteForeign extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->truncateTable();
        Schema::table('missed_calls', function (Blueprint $table) {
            $table->dropForeign('missed_calls_site_id_foreign');
            $table->dropColumn('site_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('missed_calls', function (Blueprint $table) {
            $table->unsignedInteger('site_id')->after('datetime_call');
            $table->foreign('site_id')->references('id')->on('sites');
        });
    }

    /**
     * Truncate data in table before alter his structure
     *
     * @return void
     */
    public function truncateTable() {
        Schema::disableForeignKeyConstraints();
        DB::table('missed_calls')->truncate();
        Schema::enableForeignKeyConstraints();
    }
}
