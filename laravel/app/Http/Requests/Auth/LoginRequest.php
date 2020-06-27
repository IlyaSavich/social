<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\ApiRequest;

/**
 * @property string $email
 * @property string $password
 */
class LoginRequest extends ApiRequest
{
    public function rules()
    {
        return [
            'email' => 'required|email|exists:users',
            'password' => 'required|string|min:8',
        ];
    }

    public function messages()
    {
        return [
            'email.exists' => 'Email doesn\'t exist',
        ];
    }
}
