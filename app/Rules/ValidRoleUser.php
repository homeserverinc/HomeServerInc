<?php

namespace App\Rules;

use App\Role;
use App\User;
use App\RoleUser;
use Illuminate\Support\Facades\Log;
use Illuminate\Contracts\Validation\Rule;

class ValidRoleUser implements Rule
{
    protected $role = null;
    protected $user = null;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(Role $role, User $user)
    {
        $this->role = $role;
        $this->user = $user;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $roleUser = RoleUser::where('role_id', $this->role->id)
                        ->where('user_id', $this->user->id)
                        ->count();
        return ($roleUser == 0);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The Role vs User association already exists.';
    }
}
