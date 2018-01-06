<?php

use Illuminate\Http\Request;

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

Route::get('ads', 'AdsController@showAllAds');

Route::get('ads/{ad}', 'AdsController@showOneAd');

Route::post('ads', 'AdsController@createOneAd');

Route::put('ads/{ad}', 'AdsController@updateOneAd');

Route::delete('ads/{ad}', 'AdsController@deleteOneAd');
