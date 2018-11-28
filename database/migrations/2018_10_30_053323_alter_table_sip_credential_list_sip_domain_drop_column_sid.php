<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableSipCredentialListSipDomainDropColumnSid extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sip_credential_list_sip_domain', function (Blueprint $table) {
            $table->dropColumn('sid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sip_credential_list_sip_domain', function (Blueprint $table) {
            $table->string('sid')->after('sip_domain_id');
        });
    }
}
