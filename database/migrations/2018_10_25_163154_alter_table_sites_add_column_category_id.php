<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableSitesAddColumnCategoryId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sites', function (Blueprint $table) {
            $table->dropForeign('sites_service_id_foreign');
            $table->dropColumn('service_id');
            $table->unsignedInteger('category_id')->after('city_id');
            $table->foreign('category_id')->references('id')->on('categories');
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
            $table->dropForeign('sites_category_id_foreign');
            $table->dropColumn('category_id');
            $table->unsignedInteger('service_id')->after('city_id');
            $table->foreign('service_id')->references('id')->on('services');
        });
    }
}
