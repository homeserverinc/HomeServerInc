<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableSipCredentialListSipDomainAdjustPivotOptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('sip_credential_list_sip_domain');
        
        Schema::create('sip_credential_list_sip_domain', function (Blueprint $table) {
            $table->unsignedInteger('sip_credential_list_id')->index();
            $table->unsignedInteger('sip_domain_id')->index();
            $table->foreign('sip_credential_list_id')->references('id')->on('sip_credential_lists')->onDelete('cascade');
            $table->foreign('sip_domain_id')->references('id')->on('sip_domains')->onDelete('cascade');
            $table->string('sid');
            $table->timestamps();
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
            //
        });
    }
}
