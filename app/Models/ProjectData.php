<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectData extends Model
{
    protected $fillable = [
        'statistics',
        'projectTasks',
        'quoteTasks',
        'regularTasks',
        'trainingTasks',
        'unplannedTasks',
        'name',
        'last_name',
        'date',
    ];

    protected $casts = [
        'statistics' => 'json',
        'projectTasks' => 'json',
        'quoteTasks' => 'json',
        'regularTasks' => 'json',
        'trainingTasks' => 'json',
        'unplannedTasks' => 'json',
    ];
}
