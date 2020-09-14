<?php

declare(strict_types=1);

namespace App\Http\Actions\Chat;

use App\Http\Actions\ApiAction;
use App\Http\Requests\Chat\RenameChatRequest;
use App\Models\Chat;

class RenameChatAction extends ApiAction
{
    public function __invoke(Chat $chat, RenameChatRequest $request)
    {
        if ($chat->isPrivate()) {
            throw new \InvalidArgumentException('Can\'t rename private chats.');
        }

        $chat->update(['name' => $request->name]);
    }
}
