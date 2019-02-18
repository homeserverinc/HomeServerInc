<?php

namespace App\Http\Controllers;

use App\Role;
use App\Permission;
use App\PermissionRole;
use App\RolePermission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class RolesController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'name' => 'Tag',
        'display_name' => 'Name',
        'description' => 'Description'
    ];

    protected $modelName = 'role';
    protected $recordName = 'display_name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadRole()) {
            if ($request->SearchField) {
                $roles = DB::table('roles')
                            ->where('name', 'like', '%'.$request->searchField.'%')
                            ->orWhere('display_name', 'like', '%'.$request->searchField.'%')
                            ->orWhere('description', 'like', '%'.$request->searchField.'%')
                            ->paginate();
            } else {
                $roles = Role::paginate();
            }

            return View('role.index', [
                'roles' => $roles,
                'fields' => $this->fields
            ]);
        } else {
            return $this->accessDenied();
        } 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateRole()) {
            $permissions = Permission::orderBy('name', 'asc')->get();

            return View('role.create', [
                'permissions' => $permissions
            ]);
        } else {
            return $this->accessDenied();
        } 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
        if (Auth::user()->canCreateRole()) {
            $this->validate($request, [
                'name' => 'required|string|min:5|max:100|unique:roles',
                'display_name' => 'required|string|max:100|unique:roles'
            ]);

            try {
                DB::beginTransaction();

                $permissions = Permission::whereIn('id', $request->permissions)->get();


                $role = new Role($request->all());

                $role = $this->createRecord($role, false);
                
                $role->permissions()->sync($permissions);

                DB::commit();

                return $this->createSuccess($role);
            } catch (\Exception $e) {
                
                DB::rollback();
                
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {
        if (Auth::user()->canUpdateRole()) {
            $permissions = Permission::orderBy('name', 'asc')->get();

            $assigned_permissions = array();
            foreach ($role->permissions as $permission) {
                $assigned_permissions[] = $permission->id;
            }

            return View('role.edit', [
                'role' => $role,
                'permissions' => $permissions,
                'assigned_permissions' => $assigned_permissions
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        if (Auth::user()->canUpdateRole()) {
            $this->validate($request, [
                'name' => 'required|string|min:5|max:100|unique:roles,id,'.$role->id,
                'display_name' => 'required|string|max:100|unique:roles,id,'.$role->id
            ]);

            try {
                DB::beginTransaction();

                $permissions = Permission::whereIn('id', $request->permissions)->get();

                $role->fill($request->all());

                $role = $this->updateRecord($role, false);
                
                $role->permissions()->sync($permissions);

                DB::commit();

                return $this->updateSuccess($role);
            } catch (\Exception $e) {
                DB::rollback();
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        if (Auth::user()->canDeleteRole()) {
            $hasUsers = $role->whereHas('users', function($query) use ($role) {
                            $query->where('role_id', $role->id);
                        })->exists();
            if ($hasUsers) {
                return $this->doOnException(new \Exception(__('messages.fk_error')));
            } else {
                return $this->deleteRecord($role);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /* public function updatePermissions(Request $request, Role $role) {
        $this->removeOldPermissions($request, $role);
        $this->addNewPermissions($request, $role);
    }

    public function removeOldPermissions(Request $request, Role $role) {
        DB::table('permission_role')->where('role_id', $role->id)
                                    ->whereNotIn('permission_id', $request->permissions)
                                    ->delete();
    }

    public function addNewPermissions(Request $request, Role $role) {
        $actualPermissions = DB::table('permission_role')->select('permission_id')->where('role_id', $role->id)->get();
        
        foreach ($request->permissions as $newPermission) {
            $dbPermission = DB::table('permission_role')->where('role_id', $role->id)->where('permission_id', $newPermission)->first();
            if ($dbPermission === null) {
                try {
                    DB::table('permission_role')->insert([
                        'permission_id' => $newPermission,
                        'role_id' => $role->id
                    ]);
                } catch (\Exception $e) {
                    dd($e);
                }
            }
        }
    } */
}
