<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSiteContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site_contacts', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->uuid('site_uuid');
            $table->string('name');
            $table->string('phone');
            $table->string('email');
            $table->text('message');
            $table->enum('contact_type_preference', ['phone', 'email']);
            $table->enum('contact_time_preference', ['morning', 'afternoon', 'night']);
            $table->unsignedInteger('user_id')->nullable();
            $table->boolean('contacted')->default(false);
            $table->timestamp('contact_date')->nullable();
            $table->foreign('site_uuid')->references('uuid')->on('sites');
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('site_contacts');
    }
}
