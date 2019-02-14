<?php

namespace App;

use App\User;
use App\Permission;
use Laratrust\Models\LaratrustRole;

class Role extends LaratrustRole
{
    public $fillable = ['name', 'display_name', 'description'];

/*     public function Permissions() {
        return $this->belongsToMany(Permission::class);
    }

    public function Users() {
        return $this->belongsToMany(User::class);
    } */
}
