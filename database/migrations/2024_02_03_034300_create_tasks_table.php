<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('userID')->unsigned();
            $table->bigInteger('registrateUserID')->unsigned();
            $table->bigInteger('companyID')->unsigned();
            $table->string('companyName', 50);
            $table->dateTime('endDate');
            $table->text('memo')->nullable();
            $table->string('state', 50); // unfinished, finish
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
};
