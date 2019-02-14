<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableSitesPhoneNumber extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sites', function (Blueprint $table) {
            $table->dropColumn('phone');
            $table->integer('phone_id')->unsigned()->after('name');
            $table->text('voicemessage')->nullable()->after('phone_id');
            $table->foreign('phone_id')->references('id')->on('phones');
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
            $table->dropForeign('sites_phone_id_foreign');
            $table->string('phone')->after('name');
            $table->dropColumn('phone_id');
            $table->dropColumn('voicemessage');
        });
    }
}
