<?php

declare(strict_types=1);

namespace App\Http\Actions\Chat;

use App\Http\Actions\ApiAction;
use App\Http\Requests\Chat\RemoveChatUserRequest;
use App\Models\Chat;

class RemoveChatUserAction extends ApiAction
{
    public function __invoke(Chat $chat, RemoveChatUserRequest $request)
    {
        if ($chat->isPrivate()) {
            throw new \InvalidArgumentException('Can\'t remove user in private chats.');
        }

        $chat->users()->detach([$request->userId]);
    }
}
