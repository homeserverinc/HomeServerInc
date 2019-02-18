<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('contractor_uuid');
            $table->string('stripe_id');
            $table->string('card_brand')->nullable();
            $table->boolean('default')->nullable();
            $table->boolean('active')->nullable();
            $table->string('card_last_four', 4)->nullable();
            $table->timestamps();

            $table->foreign('contractor_uuid')->references('uuid')->on('contractors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards');
    }
}
