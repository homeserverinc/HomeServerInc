<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterFkAgentWorkerToCascade extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('twilio_workers', function (Blueprint $table) {
            $table->dropForeign('twilio_workers_agent_id_foreign');
            $table->foreign('agent_id')->references('id')->on('agents')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('twilio_workers', function (Blueprint $table) {
            $table->dropForeign('twilio_workers_agent_id_foreign');
            $table->foreign('agent_id')->references('id')->on('agents');
        });
    }
}
