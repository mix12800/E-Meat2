<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('reg', [UserController::class, 'reg']);
Route::post('auth', [UserController::class, 'auth']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [UserController::class, 'logout']);
    Route::get('getuser', [UserController::class, 'getuser']);
    Route::middleware('role:admin')
        ->group(function () {
            Route::resource('users', UserController::class);
        });
});
