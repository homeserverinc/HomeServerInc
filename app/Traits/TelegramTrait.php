<?php

namespace App\Traits;

use Illuminate\Support\Facades\Log;
use Telegram\Bot\Api;

/**
 * Telegram trait
 */
trait TelegramTrait {
    public function getBotToken() {
        return env('TELEGRAM_BOT_TOKEN');
    }

    public function getChatId() {
        return env('TELEGRAM_CHAT_ID');
    }

    public function getTelegramApiClient() {
        return new Api($this->getBotToken());
    }

    public function sendMessage(string $message) {
        try {
            $this->getTelegramApiClient()
                ->sendMessage([
                    'chat_id' => $this->getChatId(),
                    'text' => $message
                ]);
        } catch (\Exception $e) {
            Log::error('[TELEGRAM:sendMessage] - Error: '.$e->getMessage());
        }
    }
}
