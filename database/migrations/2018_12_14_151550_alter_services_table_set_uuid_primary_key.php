<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterServicesTableSetUuidPrimaryKey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('services', function (Blueprint $table) {
            if (Schema::hasColumn('services', 'id')) {
                $table->dropColumn('id');
            }
            if (!Schema::hasColumn('services', 'uuid')) {
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
        Schema::table('services', function (Blueprint $table) {
            /* $table->dropIndex('uuid');
            //$table->dropColumn('uuid');
            if (!Schema::hasColumn('services', 'id')) {
                $table->increments('id')->first();
            }  */
        });
    }
}
