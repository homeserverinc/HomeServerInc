<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTextsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('texts', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('category_uuid')->nullable();
            $table->uuid('text_type_uuid')->nullable();
            $table->string('brief')->nullable();
            $table->text('fullText')->nullable();

            $table->foreign('category_uuid')->references('uuid')->on('categories');
            $table->foreign('text_type_uuid')->references('uuid')->on('text_types');
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
        Schema::dropIfExists('texts');
    }
}
