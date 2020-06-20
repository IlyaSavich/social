<?php

declare(strict_types=1);

namespace App\Http\Actions\Auth;

use Illuminate\Support\Facades\Auth;

abstract class AuthAction
{
    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    protected function guard()
    {
        return Auth::guard();
    }

    protected function responseWithToken(string $token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::guard()->factory()->getTTL() * 60,
        ]);
    }
}
