<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterCategoriesTableSetUuidPrimaryKey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->truncateTable();

        Schema::table('category_site', function (Blueprint $table) {
            $table->dropForeign('category_site_category_id_foreign');
        });
        Schema::table('services', function (Blueprint $table) {
            $table->dropForeign('services_category_id_foreign');
        });
        Schema::table('categories', function (Blueprint $table) {
            if (Schema::hasColumn('categories', 'id')) {
                $table->dropColumn('id')
                      ->dropPrimary('id');
            }
            if (!Schema::hasColumn('categories', 'uuid')) {
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
        Schema::table('categories', function (Blueprint $table) {
            /* if (Schema::hasColumn('categories', 'uuid')) {
                $table->dropColumn('uuid');
            } 
            if (!Schema::hasColumn('categories', 'id')) {
                $table->increments('id')->first();
            }  */
        });
    }

    /**
     * Truncate data in table before alter his structure
     *
     * @return void
     */
    public function truncateTable() {
        Schema::disableForeignKeyConstraints();
        DB::table('categories')->truncate();
        Schema::enableForeignKeyConstraints();
    }
}
