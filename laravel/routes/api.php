<?php

use App\Http\Actions\Auth\LoginAction;
use App\Http\Actions\Auth\LogoutAction;
use App\Http\Actions\Auth\RegisterAction;

Route::post('/login', LoginAction::class)->name('login');
Route::post('/register', RegisterAction::class)->name('register');

Route::group(['middleware' => ['api', 'auth:api']], function () {
    Route::post('/logout', LogoutAction::class)->name('logout');
});
