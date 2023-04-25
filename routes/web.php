<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CommentController;
/*
|--------------------------------------------------------------------------
| Enes Demircan
|--------------------------------------------------------------------------
*/
Route::get('/', [ArticleController::class, 'landingPage'])->name('article.landingPage');

Route::middleware('auth', 'verified','permission')->group(function () {
    Route::get('/dashboard', function () { return Inertia::render('Dashboard'); })->name('dashboard');
    Route::resource('article', ArticleController::class);
    Route::resource('comment', CommentController::class);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
