<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeadsTableNewStructure extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('customer_uuid');
            $table->foreign('customer_uuid')->references('uuid')->on('customers');
            $table->enum('deadline', [
                'im-flexible', 
                'within-48-hours', 
                'within-a-week', 
                'wihtin-a-month',
                'within-a-year']);
            $table->text('project_details')->nullable();
            $table->text('questions');
            $table->boolean('verified_data')->default(false);
            $table->boolean('closed')->default(false);
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
        Schema::dropIfExists('leads');
    }
}
