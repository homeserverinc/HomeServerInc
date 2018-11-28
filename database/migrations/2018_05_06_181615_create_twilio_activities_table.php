<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTwilioActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('twilio_activities', function (Blueprint $table) {
            $table->increments('id');
            $table->string('sid');
            $table->string('friendly_name');
            $table->boolean('available')->default(false);
            $table->integer('twilio_workspace_id')->unsigned();
            $table->foreign('twilio_workspace_id')->references('id')->on('twilio_workspaces');
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
        Schema::dropIfExists('twilio_activities');
    }
}
