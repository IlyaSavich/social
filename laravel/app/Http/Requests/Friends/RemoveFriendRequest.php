<?php

namespace App\Http\Requests\Friends;

use App\Http\Requests\ApiRequest;

/**
 * @property int $userId
 * @property int $friendId
 */
class RemoveFriendRequest extends ApiRequest
{
    public function rules()
    {
        return [
            'userId' => 'required|exists:users,id',
            'friendId' => 'required|exists:users,id',
        ];
    }

    public function messages()
    {
        return [
            'userId.exists' => 'Wrong user was passed.',
            'friendId.exists' => 'Selected friend is wrong.',
        ];
    }
}
