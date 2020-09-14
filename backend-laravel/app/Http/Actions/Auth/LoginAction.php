<?php

declare(strict_types=1);

namespace App\Http\Actions\Auth;

use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Response;

class LoginAction extends AuthAction
{
    public function __invoke(LoginRequest $request)
    {
        $token = $this->guard()->attempt($request->only('email', 'password'));

        if (!$token) {
            return response()->json(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        return $this->responseWithToken($token);
    }
}
