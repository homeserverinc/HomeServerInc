<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlanCategoryLeadTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plan_category_lead', function (Blueprint $table) {
            $table->uuid('plan_uuid');
            $table->uuid('category_lead_uuid');
            $table->primary(['plan_uuid', 'category_lead_uuid']);

            $table->foreign('plan_uuid')->references('uuid')->on('plans');
            $table->foreign('category_lead_uuid')->references('uuid')->on('category_leads');
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
        Schema::dropIfExists('plan_category_lead');
    }
}
