<?php

declare(strict_types=1);

namespace App\Http\Actions\Chat;

use App\Http\Actions\ApiAction;
use App\Http\Requests\Chat\RemoveChatAdminRequest;
use App\Models\Chat;

class RemoveChatAdminAction extends ApiAction
{
    public function __invoke(Chat $chat, RemoveChatAdminRequest $request)
    {
        if ($chat->isPrivate()) {
            throw new \InvalidArgumentException('Can\'t remove admin in private chats.');
        }

        $chat->users()->updateExistingPivot($request->userId, ['is_admin' => false]);
    }
}
