<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilteredLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('filtered_leads', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->integer('user_id')->unsigned()->nullable();
            $table->uuid('lead_uuid');
            $table->boolean('accepted')->default(0);
            $table->string('reason', 150);

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('lead_uuid')->references('uuid')->on('leads');
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
        Schema::dropIfExists('filtered_leads');
    }
}
