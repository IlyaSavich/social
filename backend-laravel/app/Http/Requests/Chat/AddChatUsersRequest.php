<?php

namespace App\Http\Requests\Chat;

use App\Http\Requests\ApiRequest;

/**
 * @property array<int> $userIds
 */
class AddChatUsersRequest extends ApiRequest
{
    public function rules()
    {
        return [
            'userIds' => 'required|array',
            'userIds.*' => 'exists:users,id',
        ];
    }

    public function messages()
    {
        return [
            'userIds.*.exists' => 'User doesn\'t exist.',
        ];
    }
}
