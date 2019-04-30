<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCallLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('call_logs', function (Blueprint $table) {
            $table->uuid('uuid');
            $table->string('sid');
            $table->string('from');
            $table->string('formated_from');
            $table->string('forwarded_from');
            $table->string('to');
            $table->string('status');
            $table->dateTimeTz('start_time');
            $table->dateTimeTz('end_time');
            $table->boolean('notified')->default(false);
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
        Schema::dropIfExists('call_logs');
    }
}
