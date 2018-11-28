<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMissedCallsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('missed_calls', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('datetime_call');
            $table->unsignedInteger('site_id');
            $table->unsignedInteger('language_id')->nullable();
            $table->string('from');
            $table->boolean('returned')->nullable();
            $table->unsignedInteger('agent_id')->nullable();
            $table->foreign('site_id')->references('id')->on('sites');
            $table->foreign('language_id')->references('id')->on('languages');
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
        Schema::dropIfExists('missed_calls');
    }
}
