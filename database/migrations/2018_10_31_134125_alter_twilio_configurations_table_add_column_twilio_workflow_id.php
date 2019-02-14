<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTwilioConfigurationsTableAddColumnTwilioWorkflowId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('twilio_configurations', function (Blueprint $table) {
            $table->unsignedInteger('twilio_workflow_id')->after('twilio_workspace_id')->nullable();
            $table->foreign('twilio_workflow_id')->references('id')->on('twilio_workflows')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('twilio_configurations', function (Blueprint $table) {
            $table->dropForeign('twilio_configurations_twilio_workflow_id_foreign');
            $table->dropColumn('twilio_workflow_id');
        });
    }
}
