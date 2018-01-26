<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->comment('昵称');
            $table->string('avatarUrl')->comment('头像');
            $table->string('gender')->default('1')->comment('性别');
            $table->string('city')->default('北京')->comment('城市');
            $table->string('province')->default('北京')->comment('城市');
            $table->string('country')->default('中国')->comment('城市');
            $table->string('openid');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
