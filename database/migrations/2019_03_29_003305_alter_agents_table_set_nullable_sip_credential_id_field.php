<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterAgentsTableSetNullableSipCredentialIdField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('agents', function (Blueprint $table) {
            $table->dropForeign('agents_sip_credential_id_foreign');
        });

        Schema::table('agents', function (Blueprint $table) {
            $table->unsignedInteger('sip_credential_id')->nullable()->change();
            $table->foreign('sip_credential_id')->references('id')->on('sip_credentials')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('agents', function (Blueprint $table) {
            //
        });
    }
}
