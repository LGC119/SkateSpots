<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tools\WechatSdk;
use App\User;

class AuthController extends Controller
{
    protected $wechat;

    public function construct(WechatSdk $wechat)
    {
        $this->wechat = $wechat;
    }

    public function auth(Request $request)
    {
        if (!$userinfo = $this->wechat->login()) {
            return response()->json('登陆失败', 500);
        }
        User::create([
            'name' => $userinfo['nickName'],
            'city' => $userinfo['city'],
            'openid' => $userinfo['openid'],
        ]);
    }
}
