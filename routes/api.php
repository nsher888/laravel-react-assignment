<?php

use App\Http\Controllers\ProjectDataController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::controller(ProjectDataController::class)->group(function () {
    Route::post('/project-data', 'store');
    Route::get('/project-data', 'index');
    Route::delete('/project-data/{id}', 'destroy');
    Route::get('/project-data/{id}', 'show');
    Route::put('/project-data/{id}', 'update');
});
