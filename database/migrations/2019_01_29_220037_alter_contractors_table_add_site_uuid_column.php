<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterContractorsTableAddSiteUuidColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('contractors')->truncate();
        Schema::table('contractors', function (Blueprint $table) {
            $table->uuid('site_uuid')->index()->after('email');
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
        Schema::table('contractors', function (Blueprint $table) {
            $table->dropForeign('contractors_site_uuid_foreign');
            $table->dropColumn('site_uuid');
        });
    }
}
