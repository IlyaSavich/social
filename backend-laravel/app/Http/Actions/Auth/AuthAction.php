<?php

declare(strict_types=1);

namespace App\Http\Actions\Auth;

use App\Http\Actions\ApiAction;

abstract class AuthAction extends ApiAction
{
    protected function responseWithToken(string $token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->guard()->factory()->getTTL() * 60,
        ]);
    }
}
