<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChargesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('charges', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('contractor_uuid');
            $table->string('stripe_id');
            $table->text('description')->nullable();
            $table->double('amout', 8, 2);
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
        Schema::dropIfExists('charges');
    }
}
