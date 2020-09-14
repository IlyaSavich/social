<?php

declare(strict_types=1);

namespace App\Http\Actions\Chat;

use App\Http\Actions\ApiAction;
use App\Http\Requests\Chat\CreateChatRequest;
use App\Models\Chat;

class CreateChatAction extends ApiAction
{
    public function __invoke(CreateChatRequest $request)
    {
        $this->validateUsersInPrivateChat($request);

        $chat = Chat::create([
            'name' => $request->name,
            'type' => $request->type,
            'creator_id' => $this->user()->id,
        ]);

        if ($request->userIds) {
            $pivotData = collect($request->userIds)->mapWithKeys(static function (int $userId) {
                return [$userId => ['is_admin' => false]];
            });

            $chat->users()->sync($pivotData, false);
        }
    }

    private function validateUsersInPrivateChat(CreateChatRequest $request)
    {
        if ($request->type === Chat::PRIVATE_TYPE && count($request->userIds) !== 2) {
            throw new \InvalidArgumentException('There must be 2 users in private chat.');
        }
    }
}
