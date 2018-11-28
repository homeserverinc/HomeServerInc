<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableSitesAddStateAndServiceColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sites', function (Blueprint $table) {
            $table->integer('state_id')->unsigned()->after('address');
            $table->integer('service_id')->unsigned()->after('category_id');
            $table->foreign('state_id')->references('id')->on('states');
            $table->foreign('service_id')->references('id')->on('services');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sites', function (Blueprint $table) {
            $table->dropForeign('sites_state_id_foreign');
            $table->dropForeign('sites_service_id_foreign');
            $table->dropColumn('state_id');
            $table->dropColumn('service_id');
        });
    }
}
