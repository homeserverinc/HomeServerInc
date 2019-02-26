<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterLeadsTableRemoveServiceAddCategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('leads', function (Blueprint $table) {
            $table->dropForeign('leads_service_uuid_foreign');
            $table->dropColumn('service_uuid');

            $table->uuid('category_uuid');
            $table->foreign('category_uuid')->references('uuid')->on('categories');
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
            $table->dropForeign('leads_category_uuid_foreign');
            $table->dropColumn('category_uuid');

            $table->uuid('service_uuid');
            $table->foreign('service_uuid')->references('uuid')->on('services');
        });
    }
}
