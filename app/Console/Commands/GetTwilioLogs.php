<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\CallLogsController;

class GetTwilioLogs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'twilio:call-logs {--notify=true : Notify new records from SMS}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get logs from Twilio calls and store locally';
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            $callLogsController = new CallLogsController;
            $callLogsController->syncLogs($this->option('notify'));
        } catch (\Exception $e) {
            Log::error("Error getting Twilio call logs: " . $e->getMessage());
        }
    }
}
