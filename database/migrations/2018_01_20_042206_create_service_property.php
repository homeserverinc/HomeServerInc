<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiceProperty extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('property_service', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('service_id')->unsigned();
            $table->integer('property_id')->unsigned();
            $table->text('property_options')->nullable();
            $table->boolean('is_required')->default(false);
            $table->foreign('service_id')->references('id')->on('services');
            $table->foreign('property_id')->references('id')->on('properties');
            $table->timestamps();
            $table->unique([
                'service_id',
                'property_id'
            ]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('property_service', function (Blueprint $table) {
            Schema::drop('property_service');
        });
    }
}
