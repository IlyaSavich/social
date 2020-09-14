<?php

use App\Http\Actions\Auth\LoginAction;
use App\Http\Actions\Auth\LogoutAction;
use App\Http\Actions\Auth\RegisterAction;
use App\Http\Actions\Chat\AddChatAdminAction;
use App\Http\Actions\Chat\AddChatUsersAction;
use App\Http\Actions\Chat\CreateChatAction;
use App\Http\Actions\Chat\GetChatMessagesAction;
use App\Http\Actions\Chat\GetChatsAction;
use App\Http\Actions\Chat\RemoveChatAdminAction;
use App\Http\Actions\Chat\RemoveChatUserAction;
use App\Http\Actions\Chat\RenameChatAction;
use App\Http\Actions\Friends\ApproveFriendAction;
use App\Http\Actions\Friends\InviteFriendAction;
use App\Http\Actions\Friends\RemoveFriendAction;

Route::post('/login', LoginAction::class)->name('login');
Route::post('/register', RegisterAction::class)->name('register');

Route::group(['middleware' => ['api', 'auth:api']], function () {
    Route::post('/logout', LogoutAction::class)->name('logout');

    Route::get('/chats', GetChatsAction::class);
    Route::get('/chats/{chat}/messages', GetChatMessagesAction::class);
    Route::post('/chats', CreateChatAction::class);
    Route::post('/chats/{chat}/rename', RenameChatAction::class);
    Route::post('/chats/{chat}/users', AddChatUsersAction::class);
    Route::delete('/chats/{chat}/users', RemoveChatUserAction::class);
    Route::post('/chats/{chat}/users/admin', AddChatAdminAction::class);
    Route::delete('/chats/{chat}/users/admin', RemoveChatAdminAction::class);

    Route::post('/friends/invite', InviteFriendAction::class);
    Route::post('/friends/approve', ApproveFriendAction::class);
    Route::delete('/friends', RemoveFriendAction::class);
});
