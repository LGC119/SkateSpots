<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSpotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('spots', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->comment('名称');
            $table->string('latitude')->comment('维度');
            $table->string('longitude')->comment('经度');
            $table->tinyInteger('type')->default(1)->comment('类型;1滑板场;2街头;');
            $table->integer('user_id')->unsigned()->comment('上传者');
            $table->integer('view_num')->default(0)->comment('阅读数');
            $table->integer('like_num')->default(0)->comment('点赞数');
            $table->integer('comment_num')->default(0)->comment('评论数');
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
        Schema::dropIfExists('spots');
    }
}
