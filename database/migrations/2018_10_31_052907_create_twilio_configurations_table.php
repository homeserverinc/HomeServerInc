<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTwilioConfigurationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('twilio_configurations', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('sip_domain_id')->nullable();
            $table->unsignedInteger('twilio_workspace_id')->nullable();
            $table->foreign('sip_domain_id')->references('id')->on('sip_domains')->onDelete('cascade');
            $table->foreign('twilio_workspace_id')->references('id')->on('twilio_workspaces')->onDelete('cascade');
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
        Schema::dropIfExists('twilio_configurations');
    }
}
