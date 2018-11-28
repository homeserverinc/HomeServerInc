<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCallRoutesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('call_routes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('phone_id')->unsigned();
            $table->string('to_destination')->default('agents');
            $table->integer('priority')->default(1);
            $table->boolean('active')->default(true);
            $table->foreign('phone_id')->references('id')->on('phones');
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
        Schema::dropIfExists('call_routes');
    }
}
