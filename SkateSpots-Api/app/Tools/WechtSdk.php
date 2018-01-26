<?php
namespace App\Tools;

use Log;

/**
* wechat sdk
*/
class WechatSdk
{
    protected $config = [
        'appId' => 'wx656db67594648494',
        'appSecret' => 'a33ca11a2960c3dd8847cc9b2e1ca97d',
    ];

    public function login()
    {

        $result = LoginService::login();

        // $result => [
        //   loginState: 1  // 1表示登录成功，0表示登录失败
        //   userinfo: []   // 用户信息
        // ]

        if ($result['loginState'] === Constants::S_AUTH) {
            // 微信用户信息：`$result['userinfo']['userinfo']`
            return $result['userinfo'];
        } else {
            // 登录失败原因：`$result['error']`
            Log::error('登陆失败', $result);
            return false;
        }
    }
}