<?php

namespace App\Http\Middleware;

use Closure;
use Redis;

class WechatAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->input('token');
        $info = base64_decode(json_decode($token));
        if (!isset($info['sub'])) {
            return repsonse()->json('未授权', 401);
        }
        if (Redis::hget('user:token', $info['sub']) != $token) {
            return repsonse()->json('token失效', 401);
        }
        return $next($request);
    }
}
