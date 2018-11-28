<?php

namespace App\Http\Controllers;

use App\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class PermissionsController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'display_name' => 'Name',
        'description' => 'Description'
    ];

    protected $modelName = 'permission';
    protected $recordName = 'display_name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadPermission()) {
            if ($request->searchField) {
                $permissions = DB::table('permissions')
                                ->where('name', 'like', '%'.$request->searchField.'%')
                                ->where('display_name', 'like', '%'.$request->searchField.'%')
                                ->where('description', 'like', '%'.$request->searchField.'%')
                                ->orderBy('id', 'desc')
                                ->paginate();
            } else {
                $permissions = DB::table('permissions')
                                ->orderBy('id', 'desc')
                                ->paginate();
            }

            return View('permission.index', [
                'permissions' => $permissions,
                'fields' => $this->fields
            ]);
        } else {
            return $this->accessDenied();
        } 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function edit(Permission $permission)
    {
        if (Auth::user()->canUpdatePermission()) {
            return View('permission.edit', [
                'permission' => $permission
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Permission $permission)
    {
        if (Auth::user()->canUpdatePermission()) {
            $this->validate($request, [
                'name' => 'string|required|min:5|max:100|unique:permissions,id,'.$permission->id,
                'display_name' => 'string|required|min:5|max:100|unique:permissions,id,'.$permission->id
            ]);

            try {
                $permission->fill($request->all());

                return $this->updateRecord($permission);
            } catch (\Exception $e) {
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }
}
