<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlteraAgentsTableAddColumnTwilioWorkerId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('agents', function (Blueprint $table) {
            $table->unsignedInteger('twilio_worker_id')->after('twilio_workspace_id');
            $table->foreign('twilio_worker_id')->references('id')->on('twilio_workers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('agents', function (Blueprint $table) {
            $table->dropForeign('agents_twilio_worker_id_foreign');
            $table->dropColumn('twilio_worker_id');
        });
    }
}
