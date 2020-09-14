<?php

declare(strict_types=1);

namespace App\Http\Actions\Auth;

use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;

class RegisterAction extends AuthAction
{
    public function __invoke(RegisterRequest $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => \Hash::make($request->password),
        ]);

        $token = $this->guard()->attempt($request->only('email', 'password'));

        return $this->responseWithToken($token);
    }
}
