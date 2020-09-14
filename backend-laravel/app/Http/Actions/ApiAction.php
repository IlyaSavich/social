<?php

declare(strict_types=1);

namespace App\Http\Actions;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ApiAction
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

    /**
     * @return \Illuminate\Contracts\Auth\Authenticatable|User|null
     */
    protected function user()
    {
        return $this->guard()->user();
    }
}
