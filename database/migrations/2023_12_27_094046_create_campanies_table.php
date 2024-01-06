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
        Schema::create('campanies', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('telephone', 20)->nullable();
            $table->string('email')->nullable();
            $table->string('HP', 256)->nullable();
            $table->string('workLocation', 100)->nullable();
            $table->text('contents')->nullable();
            $table->string('workTime', 100)->nullable();
            $table->string('flex', 100)->nullable();
            $table->string('remoteWork', 100)->nullable();
            $table->string('cloth', 100)->nullable();
            $table->string('incomeYear', 100)->nullable();
            $table->string('incomeMonth', 100)->nullable();
            $table->string('incomeNatural', 100)->nullable();
            $table->string('fixOverTime', 100)->nullable();
            $table->string('fixOverTimeHour', 100)->nullable();
            $table->string('fixOverTimePayment', 100)->nullable();
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
        Schema::dropIfExists('campanies');
    }
};
