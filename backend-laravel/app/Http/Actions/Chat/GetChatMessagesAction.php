<?php

declare(strict_types=1);

namespace App\Http\Actions\Chat;

use App\Http\Actions\ApiAction;
use App\Models\Chat;
use App\Models\Message;

class GetChatMessagesAction extends ApiAction
{
    public function __invoke(Chat $chat)
    {
        // TODO pagination
        $responseBody = $chat->messages()->with('user')->get()->map(static function (Message $message) {
            return [
                'user' => $message->user->name,
                'text' => $message->text,
                'time' => $message->created_at->format(Message::TIME_FORMAT),
            ];
        });

        return response()->json($responseBody);
    }
}
