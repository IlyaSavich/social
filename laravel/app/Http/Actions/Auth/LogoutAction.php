<?php

declare(strict_types=1);

namespace App\Http\Actions\Auth;

class LogoutAction extends AuthAction
{
    public function __invoke()
    {
        $this->guard()->logout();
    }
}
