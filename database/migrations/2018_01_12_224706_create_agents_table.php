<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAgentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agents', function (Blueprint $table) {
            $table->increments('id');
            $table->string('agent_name');
            $table->integer('user_id')->unsigned();
            $table->integer('agent_status_id')->unsigned()->default(1);
            $table->datetime('last_call_begin')->nullable();
            $table->datetime('last_call_finish')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('agent_status_id')->references('id')->on('agent_statuses');
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
        Schema::dropIfExists('agents');
    }
}
