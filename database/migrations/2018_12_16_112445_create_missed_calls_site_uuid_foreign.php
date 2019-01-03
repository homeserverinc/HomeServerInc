<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMissedCallsSiteUuidForeign extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('missed_calls', function (Blueprint $table) {
            $table->uuid('site_uuid')->after('datetime_call');
            $table->foreign('site_uuid')->references('uuid')->on('sites');
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
            $table->dropForeign('missed_calls_site_uuid_foreign');
            $table->dropColumn('site_uuid');
        });
    }
}
