<?php

namespace App\Http\Requests\Chat;

use App\Http\Requests\ApiRequest;

/**
 * @property int $userId
 */
class RemoveChatUserRequest extends ApiRequest
{
    public function rules()
    {
        return [
            'userId' => 'required|exists:users,id',
        ];
    }

    public function messages()
    {
        return [
            'userId.exists' => 'User doesn\'t exist.',
        ];
    }
}
