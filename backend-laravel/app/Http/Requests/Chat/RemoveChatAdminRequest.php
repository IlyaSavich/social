<?php

namespace App\Http\Requests\Chat;

use App\Http\Requests\ApiRequest;
use App\Models\Chat;
use Illuminate\Database\Query\Builder;
use Illuminate\Validation\Rule;

/**
 * @property int $userId
 */
class RemoveChatAdminRequest extends ApiRequest
{
    public function rules()
    {
        /** @var Chat $chat */
        $chat = \Request::route('chat');

        $existsRule = Rule::exists('chat_user', 'user_id')->where(static function (Builder $query) use ($chat) {
            $query->where([['chat_id', $chat->id], ['is_admin', true]]);
        });

        return [
            'userId' => ['required', $existsRule],
        ];
    }

    public function messages()
    {
        return [
            'userId.exists' => 'Selected user is wrong.',
        ];
    }
}
