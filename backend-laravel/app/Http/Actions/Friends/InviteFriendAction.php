<?php

declare(strict_types=1);

namespace App\Http\Actions\Friends;

use App\Http\Actions\ApiAction;
use App\Http\Requests\Friends\InvideFriendRequest;
use App\Models\Friend;

class InviteFriendAction extends ApiAction
{
    public function __invoke(InvideFriendRequest $request)
    {
        Friend::create([
            'user_id' => $request->userId,
            'friend_id' => $request->friendId,
            'status' => Friend::STATUS_INVITED,
        ]);

        Friend::create([
            'user_id' => $request->friendId,
            'friend_id' => $request->userId,
            'status' => Friend::STATUS_WAITED_APPROVAL,
        ]);
    }
}
