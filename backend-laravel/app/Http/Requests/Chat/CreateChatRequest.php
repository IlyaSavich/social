<?php

namespace App\Http\Requests\Chat;

use App\Http\Requests\ApiRequest;
use App\Models\Chat;

/**
 * @property string|null $name
 * @property string $type
 * @property array|null $userIds
 */
class CreateChatRequest extends ApiRequest
{
    public function rules()
    {
        return [
            'name' => 'string|min:1|required_if:type,' . Chat::GROUP_TYPE,
            'type' => 'required|in:' . implode(',', Chat::TYPES),
            'userIds' => 'array',
            'users.*' => 'exists:users',
        ];
    }

    public function messages()
    {
        return [
            'name.required_if' => 'The name field is required.',
            'type.in' => 'Type must be one of [' . implode(',', Chat::TYPES) . '].',
            'users.*.exists' => 'User doesn\'t exist.',
        ];
    }
}
