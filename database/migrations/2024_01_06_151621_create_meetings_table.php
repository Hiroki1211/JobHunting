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
        Schema::create('meetings', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('userID')->unsigned();
            $table->bigInteger('registrateUserID')->unsigned();
            $table->bigInteger('companyID')->unsigned();
            $table->string('companyName', 50);
            $table->dateTime('startDate');
            $table->dateTime('endDate');
            $table->text('memo')->nullable();
            $table->text('location');
            $table->string('cloth', 50);
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
        Schema::dropIfExists('meetings');
    }
};
