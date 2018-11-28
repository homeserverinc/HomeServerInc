<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCallsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calls', function (Blueprint $table) {
            $table->increments('id');
            $table->string('callsid')->nullable();
            $table->string('called')->nullable();
            $table->string('called_zip')->nullable();
            $table->string('called_city')->nullable();
            $table->string('called_state')->nullable();
            $table->string('called_country')->nullable();
            $table->string('caller')->nullable();
            $table->string('caller_zip')->nullable();
            $table->string('caller_city')->nullable();
            $table->string('caller_state')->nullable();
            $table->string('caller_country')->nullable();
            $table->string('from')->nullable();
            $table->string('from_zip')->nullable();
            $table->string('from_city')->nullable();
            $table->string('from_state')->nullable();
            $table->string('from_country')->nullable();
            $table->string('to')->nullable();
            $table->string('to_zip')->nullable();
            $table->string('to_city')->nullable();
            $table->string('to_state')->nullable();
            $table->string('to_country')->nullable();
            $table->string('direction')->nullable();
            $table->string('api_version')->nullable();
            $table->string('account_sid')->nullable();
            $table->datetime('call_begin')->nullable();
            $table->datetime('call_finish')->nullable();
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
        Schema::dropIfExists('calls');
    }
}
