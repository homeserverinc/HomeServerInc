<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewCategorySiteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_site', function (Blueprint $table) {
            $table->uuid('category_uuid')->index();
            $table->uuid('site_uuid')->index();
            $table->foreign('category_uuid')->references('uuid')->on('categories')->onDelete('cascade');
            $table->foreign('site_uuid')->references('uuid')->on('sites')->onDelete('cascade');
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
        Schema::dropIfExists('category_site');
    }
}
