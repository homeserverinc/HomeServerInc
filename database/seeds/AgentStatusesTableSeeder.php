<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AgentStatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('agent_statuses')->insert([
            [
                'agent_status' => 'Active'
            ],
            [
                'agent_status' => 'Deactivated'
            ],
            [
                'agent_status' => 'Busy'
            ],
            [
                'agent_status' => 'Avaiable'
            ]
        ]);
    }

    /**
     * Truncates agent_statuses table
     *
     * @return    void
     */
    
    public function truncateAgentStatusesTable()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('agent_statuses')->truncate();
        \App\AgentStatus::truncate();
        Schema::enableForeignKeyConstraints();
    }
}
