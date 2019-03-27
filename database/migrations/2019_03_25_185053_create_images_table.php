<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('image_type_uuid');
            $table->uuid('category_uuid');
            $table->string('file');
            $table->string('width');
            $table->string('height');


            $table->foreign('image_type_uuid')->references('uuid')->on('image_types');
            $table->foreign('category_uuid')->references('uuid')->on('categories');
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
        Schema::dropIfExists('images');
    }
}
