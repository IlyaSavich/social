<?php

declare(strict_types=1);

namespace App\Http\Actions\Chat;

use App\Http\Actions\ApiAction;
use App\Http\Requests\Chat\AddChatAdminRequest;
use App\Models\Chat;

class AddChatAdminAction extends ApiAction
{
    public function __invoke(Chat $chat, AddChatAdminRequest $request)
    {
        if ($chat->isPrivate()) {
            throw new \InvalidArgumentException('Can\'t add admin in private chats.');
        }

        $chat->users()->updateExistingPivot($request->userId, ['is_admin' => true]);
    }
}
