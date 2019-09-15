<?php

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

Route::get('/reactStore', 'ReactController@showReactApp')->name('main');

//login
Route::get('/', function () {
    return view('auth/login');
});

Auth::routes();

//Home
Route::get('/home', 'ProductController@index')->name('home');

//Create
Route::get('product', function () {
    return view('product/product');
})->name('product');

//Resource
Route::resource('home/product', 'ProductController');

Route::group(['middleware' => ['web']], function () {
    Route::any('{all}', function () {
        return view('index');
    })->where('all', '.*');
});


//Route::get('/test')->name('test');
//
//Route::get('/', function () {
//    return view('test');
//});








