<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Chat;
use App\Models\User;

class ChatService
{
    public function getChatNameForUser(Chat $chat, User $user): string
    {
        if ($chat->isGroup()) {
            return $chat->name;
        }

        if ($chat->isPrivate()) {
            /** @var User|null $anotherUser */
            $anotherUser = $chat->users->first(static function (User $chatUser) use ($user) {
                return $chatUser->id !== $user->id;
            });

            if (!$anotherUser) {
                throw new \InvalidArgumentException('Can\'t find chat companion');
            }

            return $anotherUser->name;
        }

        throw new \InvalidArgumentException('Unknown chat type. Got [' . $chat->type . ']');
    }
}
