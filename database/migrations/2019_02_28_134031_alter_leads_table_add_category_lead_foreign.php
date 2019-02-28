<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterLeadsTableAddCategoryLeadForeign extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('leads', function (Blueprint $table) {
            $table->uuid('category_lead_uuid')->index()->after('uuid');
            
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
        Schema::table('leads', function (Blueprint $table) {
            $table->dropForeign('plans_category_lead_uuid_foreign');
            $table->dropColumn('category_lead_uuid');
        });
    }
}
