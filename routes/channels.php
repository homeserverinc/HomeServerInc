<?php

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('OnlineUsers', function($user) {
    return $user;
});

Broadcast::channel('Call.User.{id}', function($user, $id) {
    return (int) Auth::id() === (int) $id;
});

Broadcast::channel('User.Status.{id}', function($user, $id) {
    return (int) Auth::id() === (int) $id;
});