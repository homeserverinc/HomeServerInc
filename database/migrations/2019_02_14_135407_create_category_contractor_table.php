<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoryContractorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_contractor', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('contractor_uuid');
            $table->uuid('category_uuid');

            $table->foreign('contractor_uuid')->references('uuid')->on('contractors');
            $table->foreign('category_uuid')->references('uuid')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category_contractor');
    }
}
