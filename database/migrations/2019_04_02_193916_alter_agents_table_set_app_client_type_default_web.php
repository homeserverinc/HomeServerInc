<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterAgentsTableSetAppClientTypeDefaultWeb extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('agents', function (Blueprint $table) {
            $table->dropColumn('app_client_type');
        });

        Schema::table('agents', function (Blueprint $table) {
            $table->enum('app_client_type', ['web', 'voip'])->after('agent_status_id')->default('web');
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
            $table->dropColumn('app_client_type');
        });

        Schema::table('agents', function (Blueprint $table) {
            $table->enum('app_client_type', ['web', 'voip'])->after('agent_status_id')->default('web');
        });
    }
}
