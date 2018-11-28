<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTwilioWorkersTableDropColumnAgentId extends Migration
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
            $table->dropColumn('agent_id');
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
            $table->unsignedInteger('agent_id')->after('twilio_workspace_id');
            $table->foreign('agent_id')->references('id')->on('agents')->onDelete('cascade');
        });
    }
}
