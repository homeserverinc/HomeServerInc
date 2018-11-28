<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSipDomainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sip_domains', function (Blueprint $table) {
            $table->increments('id');
            $table->string('sid')->unique();
            $table->string('friendly_name');
            $table->string('account_sid');
            $table->string('api_version');
            $table->string('domain_name');
            $table->string('auth_type');
            $table->string('voice_url');
            $table->string('voice_method');
            $table->string('voice_fallback_url');
            $table->string('voice_fallback_method');
            $table->string('voice_status_callback_url');
            $table->string('voice_status_callback_method');
            $table->boolean('sip_registration')->default(true);
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
        Schema::dropIfExists('sip_domains');
    }
}
