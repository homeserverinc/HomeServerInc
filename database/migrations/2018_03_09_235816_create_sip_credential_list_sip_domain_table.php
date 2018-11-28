<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSipCredentialListSipDomainTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sip_credential_list_sip_domain', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('sip_credential_list_id')->unsigned();
            $table->integer('sip_domain_id')->unsigned();
            $table->string('sid');
            $table->foreign('sip_credential_list_id')->references('id')->on('sip_credential_lists')->onDelete('cascade');
            $table->foreign('sip_domain_id')->references('id')->on('sip_domains')->onDelete('cascade');
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
        Schema::dropIfExists('sip_credential_list_sip_domain');
    }
}
