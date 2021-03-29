<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// memnaggil semua data di employees
Route::get('employees', 'App\Http\Controllers\EmployeeController@getEmployee'); 

//melihat spesifik salah satu data
Route::get('employee/{id}', 'App\Http\Controllers\EmployeeController@getEmployeeID');

//tambah employe
Route::post('addEmployee', 'App\Http\Controllers\EmployeeController@addEmployee');

//update employee
Route::put('updateEmployee/{id}', 'App\Http\Controllers\EmployeeController@updateEmployee');

//hapus employee
Route::delete('deleteEmployee/{id}', 'App\Http\Controllers\EmployeeController@deleteEmployee');