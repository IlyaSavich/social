<?php

declare(strict_types=1);

namespace App\Http\Actions\Chat;

use App\Http\Actions\ApiAction;
use App\Http\Requests\Chat\AddChatUsersRequest;
use App\Models\Chat;

class AddChatUsersAction extends ApiAction
{
    public function __invoke(Chat $chat, AddChatUsersRequest $request)
    {
        if ($chat->isPrivate()) {
            throw new \InvalidArgumentException('Can\'t add users to private chats.');
        }

        $pivotData = collect($request->userIds)->mapWithKeys(static function (int $userId) {
            return [$userId => ['is_admin' => false]];
        });

        $chat->users()->sync($pivotData, false);
    }
}
