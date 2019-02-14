<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class ValidCurrentPassword implements Rule
{

    protected $currentPassword = null;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($currentPassword)
    {
        $this->currentPassword = $currentPassword;
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
        return (Hash::check($value, $this->currentPassword));
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The current password is wrong.';
    }
}
