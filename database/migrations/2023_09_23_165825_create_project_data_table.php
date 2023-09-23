<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectDataTable extends Migration
{
    public function up()
    {
        Schema::create('project_data', function (Blueprint $table) {
            $table->id();
            $table->json('statistics');
            $table->json('projectTasks');
            $table->json('quoteTasks');
            $table->json('regularTasks');
            $table->json('trainingTasks');
            $table->json('unplannedTasks');
            $table->string('name');
            $table->string('last_name');
            $table->date('date');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('project_data');
    }
}
