<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterServicesTableChangeCategoriesForeign extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('services', function (Blueprint $table) {
            if (Schema::hasColumn('services', 'category_id')) {
                $table->dropColumn('category_id');
            }
            if (!Schema::hasColumn('services', 'category_uuid')) {
                $table->uuid('category_uuid')->index()->after('service_description');
                $table->foreign('category_uuid')->references('uuid')->on('categories');
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
        Schema::table('services', function (Blueprint $table) {
            if (Schema::hasColumn('services', 'category_uuid')) {
                $table->dropColumn('category_uuid');
            }
            if (!Schema::hasColumn('services', 'category_id')) {
                $table->unsignedInteger('category_id')->after('service_description');
                $table->foreign('category_id')->references('id')->on('categories');
            }
        });
    }
}
