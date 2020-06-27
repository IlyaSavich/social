<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Message;

class MessageService
{
    public function getMessageDate(Message $message): string
    {
        $date = $message->created_at;

        if ($date->isToday()) {
            return $date->format(Message::TIME_FORMAT);
        }

        if ($date->isYesterday()) {
            return 'Yesterday';
        }

        return $date->format(Message::DATE_FORMAT);
    }
}
