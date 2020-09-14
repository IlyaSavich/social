<?php

declare(strict_types=1);

namespace App\Http\Actions\Chat;

use App\Http\Actions\ApiAction;
use App\Models\Chat;
use App\Models\Message;
use App\Models\User;
use App\Services\ChatService;
use App\Services\MessageService;

class GetChatsAction extends ApiAction
{
    private ChatService $chatService;
    private MessageService $messageService;

    public function __construct(ChatService $chatService, MessageService $messageService)
    {
        $this->chatService = $chatService;
        $this->messageService = $messageService;
    }

    public function __invoke()
    {
        /** @var User $user */
        $user = $this->user();

        // TODO pagination
        $responseBody = $user->chats->map(function (Chat $chat) use ($user) {
            /** @var Message|null $latestMessage */
            $latestMessage = $chat->messages()->latest()->first();

            return [
                'name' => $this->chatService->getChatNameForUser($chat, $user),
                'latestMessage' => $latestMessage === null ? null : [
                    'text' => $latestMessage->text,
                    'date' => $this->messageService->getMessageDate($latestMessage),
                ],
            ];
        });

        return response()->json($responseBody);
    }
}
