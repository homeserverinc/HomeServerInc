<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Rules\ValidCurrentPassword;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\TwilioApiController;
use App\Http\Controllers\HomeServerController;

class UsersController extends HomeServerController
{
    public $fields = [
        'id' => 'ID',
        'name' => 'Name',
        'email' => 'E-mail',
        //'username' => 'Username'
    ];

    protected $modelName = 'user';
    protected $recordName = 'name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->searchField) {
            $users = User::where('name', 'like', '%'.$request->searchField.'%')
                        ->orWhere('email', 'like', '%'.$request->searchField.'%')
                        ->orWhere('username', 'like', '%'.$request->searchField.'%')
                        ->paginate();
        } else {
            $users = User::paginate();
        }

        return View('user.index', [
            'users' => $users,
            'fields' => $this->fields
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateUser()) {
            $roles = Role::all();

            return View('user.create', [
                'roles' => $roles
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
        if (Auth::user()->canCreateUser()) {
            $this->validate($request, [
                'name' => 'required|string|max:100',
                'email' => 'required|email|max:100|unique:users',
                'password' => 'required|min:6|confirmed',
                'role_id' => 'required' 
            ]);

            try {                
                $user = new User($request->all());
                $user->password = bcrypt($user->password);

                DB::beginTransaction();

                $user = $this->createRecord($user, false);

                $user->attachRole(Role::find($request->role_id));

                DB::commit();

                return $this->createSuccess($user);
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
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        if (Auth::user()->canUpdateUser()) {
            $roles = Role::all();
            $user = User::find($user->id);

            return View('user.edit', [
                'user' => $user,
                'roles' => $roles
            ]);
        } else {
            return $this->accessDenied();
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        if (Auth::user()->canUpdateUser()) {
            $this->validate($request, [
                'name' => 'required|string|max:100',
                'password' => 'present|confirmed',
                'role_id' => 'required'
            ]);

            try {
                
                $user->name = $request->name;
                if ($request->password) {
                    $user->password = bcrypt($request->password);
                }            

                DB::beginTransaction();

                $user = $this->updateRecord($user, false);

                $user->roles()->sync([]);

                $user->attachRole(Role::find($request->role_id));

                DB::commit();

                return $this->updateSuccess($user);

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
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        if (Auth::user()->canDeleteUser()) {
            if ($user->agent) {
                /* user has one agent */
                try {
                    $worker = (new TwilioApiController)->deleteTaskRouterWorker(
                        $user->agent->twilio_workspace()->first(), 
                        $user->agent->twilio_worker()->first()
                    );

                    if ($worker) {
                        return $this->deleteRecord($user);
                    } 
                } catch (\Exception $e) {
                    if ($e->getCode() == 20404) {
                        return $this->deleteRecord($user);
                    } else {
                        return $this->doOnException($e);
                    }
                }
            } else {
                /* user does not have one agent */
                return $this->deleteRecord($user);
            }
        } else {
            return $this->accessDenied();
        }
    }

    public function profile() {
        $user = Auth::user();
        return view('user.profile')->withUser($user);
    }

    public function showChangePassword() {
        $user = Auth::user();
        return view('user.change-password')->withUser($user);
    }

    public function changePassword(Request $request, User $user) {
        $user = User::find($user->id);

        $this->validate($request, [
            'current_password' => 'required',
            'password' => 'required|string|min:6|confirmed',
            'current_password' => ['required', new ValidCurrentPassword($user->password)]
        ]);

        try {       
            $user->password = bcrypt($request->password);

            if ($user->save()) {
                Session::flash('success', 'User password for '.$user->name.' successfull changed.');
                return redirect()->action('UsersController@profile');
            }
        } catch (\Exception $e) {
            Session::flash('error', env('ACCESS_DENIED_MSG'));
            return redirect()->back();
        }
    }
}
