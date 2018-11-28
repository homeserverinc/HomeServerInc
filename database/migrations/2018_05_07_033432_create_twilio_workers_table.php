<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTwilioWorkersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('twilio_workers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('sid');
            $table->string('friendly_name');
            $table->text('attributes');
            $table->integer('twilio_workspace_id')->unsigned();
            $table->integer('agent_id')->unsigned();
            $table->foreign('twilio_workspace_id')->references('id')->on('twilio_workspaces');
            $table->foreign('agent_id')->references('id')->on('agents');
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
        Schema::dropIfExists('twilio_workers');
    }
}
