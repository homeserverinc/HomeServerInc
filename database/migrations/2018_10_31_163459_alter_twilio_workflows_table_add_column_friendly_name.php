<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTwilioWorkflowsTableAddColumnFriendlyName extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('twilio_workflows', function (Blueprint $table) {
            $table->string('friendly_name')->after('id');
            $table->string('account_sid')->after('friendly_name');
            $table->string('workspace_sid')->after('account_sid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('twilio_workflows', function (Blueprint $table) {
            $table->dropColumn('friendly_name');
            $table->dropColumn('account_sid');
            $table->dropColumn('workspace_sid');
        });
    }
}
