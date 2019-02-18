<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTwilioConfigurationsTableAddColumnConfigName extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('twilio_configurations', function (Blueprint $table) {
            $table->string('config_name')->after('id')->default('Default Configuration');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('twilio_configurations', function (Blueprint $table) {
            $table->dropColumn('config_name');
        });
    }
}
