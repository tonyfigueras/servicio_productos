<?php

use Illuminate\Support\Facades\Route;

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
    return view('auth/login');
});

Auth::routes();

Route::get('{path}','App\Http\Controllers\HomeController@index')->where( 'path' , '([A-z\d\-\/_.]+)?' );


Route::post('allorden', 'App\Http\Controllers\ServiciosController@orden');
Route::post('allproductos', 'App\Http\Controllers\ServiciosController@index');
Route::post('Addproducto', 'App\Http\Controllers\ServiciosController@add');
Route::post('editproducto/{id}', 'App\Http\Controllers\ServiciosController@edit');
Route::delete('deleteproducto/{id}', 'App\Http\Controllers\ServiciosController@delete');