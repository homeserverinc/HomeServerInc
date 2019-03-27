<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagePageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('image_page', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('image_uuid');
            $table->uuid('page_uuid');

            $table->foreign('image_uuid')->references('uuid')->on('images');
            $table->foreign('page_uuid')->references('uuid')->on('pages');
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
        Schema::dropIfExists('image_page');
    }
}
