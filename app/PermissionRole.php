<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PermissionRole extends Model
{
    public $fillable = ['permission_id', 'role_id'];
    protected $table = 'permission_role';
}
