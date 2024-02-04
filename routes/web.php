<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CampanyController;
use App\Http\Controllers\MeetingController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    // profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // home
    Route::get('/dashboard', [RegistrationController::class, "index"])->name('dashboard');
    
    // campany
    Route::get('/campany', [RegistrationController::class, "campanyHome"])->name('campany');
    Route::get('/campany/create', [CampanyController::class, "create"]);
    Route::get('/campany/edit/{campany}', [CampanyController::class, "edit"]);
    
    Route::get('/campany/{campany}', [CampanyController::class, "show"]);
    Route::post('/campany/create', [CampanyController::class, "store"]);
    Route::put('/campany/edit/{campany}', [CampanyController::class, "update"]);
    Route::delete('/campany/delete/{campany}', [CampanyController::class, "delete"]);
   
    // meeting
    Route::get('/meeting', [MeetingController::class, "index"]);
    Route::get('/meeting/create/{campany}', [MeetingController::class, "create"]);
    Route::get('/meeting/show/{meeting}', [MeetingController::class, "show"]);
    Route::get('/meeting/edit/{meeting}', [MeetingController::class, "edit"]);
    
    Route::get('/meeting/{campany}', [CampanyController::class, "meetingTaskHome"]);
    Route::post('/meeting/create', [MeetingController::class, "store"]);
    Route::put('/meeting/edit/{meeting}', [MeetingController::class, "update"]);
    Route::delete('/meeting/delete/{meeting}', [MeetingController::class, "delete"]);
    
    // task
    Route::get('/task', [TaskController::class, "index"]);
    Route::get('/task/create/{campany}', [TaskController::class, "create"]);
    Route::get('/task/show/{task}', [TaskController::class, "show"]);
    Route::get('/task/edit/{task}', [TaskController::class, "edit"]);
    
    Route::post('/task/create', [TaskController::class, "store"]);
    Route::put('/task/edit/{task}', [TaskController::class, "update"]);
    Route::delete('/task/delete/{task}', [TaskController::class, "delete"]);
});

require __DIR__.'/auth.php';
