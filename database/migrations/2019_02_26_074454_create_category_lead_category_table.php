<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoryLeadCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_lead_category', function (Blueprint $table) {
            $table->uuid('category_uuid');
            $table->uuid('category_lead_uuid');
            $table->integer('weight')->default(0);
            $table->timestamps();

            $table->foreign('category_uuid')->references('uuid')->on('categories');
            $table->foreign('category_lead_uuid')->references('uuid')->on('category_leads');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category_lead_category');
    }
}
