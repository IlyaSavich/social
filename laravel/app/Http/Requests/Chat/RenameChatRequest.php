<?php

namespace App\Http\Requests\Chat;

use App\Http\Requests\ApiRequest;

/**
 * @property string $name
 */
class RenameChatRequest extends ApiRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string|min:1',
        ];
    }
}
