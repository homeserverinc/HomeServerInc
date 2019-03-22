<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDisputesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('disputes', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('charge_uuid');
            $table->string('stripe_id');
            $table->string('reason');
            $table->string('type');
            $table->string('status');
            $table->string('evidences');
            $table->timestamps();

            // $table->foreign('charge_uuid')->references('uuid')->on('charges');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('disputes');
    }
}
