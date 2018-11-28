<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterAgentsTableAddColumnTwilioWorkspaceId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('agents', function (Blueprint $table) {
            $table->unsignedInteger('twilio_workspace_id')->after('sip_credential_id');
            $table->foreign('twilio_workspace_id')->references('id')->on('twilio_workspaces');
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
            $table->dropForeign('agents_twilio_workspace_id_foreign');
            $table->dropColumn('twilio_workspace_id');
        });
    }
}
