
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableAgentsAddColumnSipCredentialId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('agents', function (Blueprint $table) {
            $table->dropColumn('agent_name');
            $table->dropColumn('last_call_begin');
            $table->dropColumn('last_call_finish');
            $table->dropColumn('agent_phone_number');
            $table->unsignedInteger('sip_credential_id')->after('user_id');
            $table->foreign('sip_credential_id')->references('id')->on('sip_credentials');
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
            $table->string('agent_name')->after('id');
            $table->datetime('last_call_begin')->nullable()->after('agent_status_id');
            $table->datetime('last_call_finish')->nullable()->after('last_call_begin');
            $table->string('agent_phone_number')->nullable()->after('app_client_type');
            $table->dropForeign('agents_sip_credential_id_foreign');
            $table->dropColumn('sip_credential_id');
        });
    }
}
