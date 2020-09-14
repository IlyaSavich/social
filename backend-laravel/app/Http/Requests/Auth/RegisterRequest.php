<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\ApiRequest;

/**
 * @property string $name
 * @property string $email
 * @property string $password
 */
class RegisterRequest extends ApiRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ];
    }
}
