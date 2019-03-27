<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePageTextTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('page_text', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('page_uuid');
            $table->uuid('text_uuid');

            $table->foreign('text_uuid')->references('uuid')->on('texts');
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
        Schema::dropIfExists('page_text');
    }
}
