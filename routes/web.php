<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CampanyController;
use App\Http\Controllers\RegistrationController;

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
    
});

require __DIR__.'/auth.php';
