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

// Admin:
Route::group(['prefix' => 'admin' , 'middleware' => ['web']], function () {

    Auth::routes();

    //Home
    Route::get('/home', 'ProductController@index')->name('home');

    //Create
    Route::get('product', function () {
        return view('product/product');
    })->name('product');

    //Resource
    Route::resource('home/product', 'ProductController');
});

// Shop (react):
Route::group(['middleware' => ['web']], function () {
    Route::get('/products', 'ReactController@getReactData');

    Route::get('{all}', function () {
        return view('main');
    })->where('all', '.*');
});








