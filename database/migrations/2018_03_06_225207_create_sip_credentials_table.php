<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSipCredentialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sip_credentials', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('sip_credential_list_id')->unsigned();
            $table->string('sid');
            $table->string('account_sid');
            $table->string('username');
            $table->string('password');
            $table->foreign('sip_credential_list_id')->references('id')->on('sip_credential_lists')->onDelete('cascade');
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
        Schema::dropIfExists('sip_credentials');
    }
}
