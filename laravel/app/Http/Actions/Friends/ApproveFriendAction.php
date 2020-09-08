<?php

declare(strict_types=1);

namespace App\Http\Actions\Friends;

use App\Http\Actions\ApiAction;
use App\Http\Requests\Friends\ApproveFriendRequest;
use App\Models\Friend;

class ApproveFriendAction extends ApiAction
{
    public function __invoke(ApproveFriendRequest $request)
    {
        Friend::whereIn('user_id', [$request->userId, $request->friendId])
            ->whereIn('friend_id', [$request->userId, $request->friendId])
            ->update(['status' => Friend::STATUS_APPROVED]);
    }
}
