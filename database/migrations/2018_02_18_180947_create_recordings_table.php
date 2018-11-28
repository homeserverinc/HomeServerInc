<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecordingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recordings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('account_sid');
            $table->string('call_sid');
            $table->string('recording_sid')->unique();
            $table->integer('duration');
            $table->datetime('recording_created_at');
            $table->datetime('recording_updated_at');
            $table->integer('user_id')->unsigned()->nullable();
            $table->datetime('user_get_at')->nullable();
            $table->boolean('answered')->default(false);
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('recordings');
    }
}
