<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTablePhonesAddTwilioCollumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('phones', function (Blueprint $table) {
            $table->string('friendly_name')->after('phone_number');
            $table->string('voice_method')->after('friendly_name')->nullable();
            $table->string('voice_url')->after('voice_method')->nullable();
            $table->string('voide_fallback_method')->after('voice_url')->nullable();
            $table->string('voice_fallback_url')->after('voide_fallback_method')->nullable();
            $table->string('sid')->after('voice_fallback_url')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('phones', function (Blueprint $table) {
            $table->dropColumn('friendly_name');
            $table->dropColumn('voice_method');
            $table->dropColumn('voice_url');
            $table->dropColumn('voide_fallback_method');
            $table->dropColumn('voice_fallback_url');
            $table->dropColumn('sid');
        });
    }
}
