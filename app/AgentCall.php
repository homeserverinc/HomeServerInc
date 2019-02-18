<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AgentCall extends Model
{
    public $fillable = ['call_id', 'agent_id'];

    public $table = 'agent_call';
}
