<?php

declare(strict_types=1);

namespace App\Http\Actions\Friends;

use App\Http\Actions\ApiAction;
use App\Http\Requests\Friends\RemoveFriendRequest;
use App\Models\Friend;

class RemoveFriendAction extends ApiAction
{
    public function __invoke(RemoveFriendRequest $request)
    {
        Friend::whereIn('user_id', [$request->userId, $request->friendId])
            ->whereIn('friend_id', [$request->userId, $request->friendId])
            ->delete();
    }
}
