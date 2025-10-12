<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Rest\Controllers\Empleadoscontroller;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Rest::resource('empleados', Empleadoscontroller::class);
