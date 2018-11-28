<?php

namespace App;

use App\Role;
use Laratrust\Models\LaratrustPermission;

class Permission extends LaratrustPermission
{
    
    public $fillable = ['display_name', 'description'];
}
