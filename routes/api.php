<?php

use App\Question;
use App\SipDomain;
use App\AnswerType;
use App\PropertyType;
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



Route::post('login', 'AuthController@login');

Route::get('/testando/{site}', 'SitesController@apiGetSite');
/* 
Route::get('/teste/{id}', 'ApiController@getService');

Route::get('/site/{site}', 'SitesController@apiGetSite'); */


Route::middleware('auth:api')->group(function(){
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    /* site */
    Route::get('/site/{uuid}', 'SitesController@apiGetSite');

    /* category */
    Route::get('/category/{category}', 'CategoriesController@apiGetCategory');

    /* categories by site uuid */
    Route::get('/categories/{site}', 'CategoriesController@apiGetCategoriesBySite');

    /* quiz */
    Route::get('/quiz/{category}', 'QuizzesController@apiGetQuiz');
    
    /* question */
    Route::get('/question/{question}', 'QuestionsController@apiGetQuestion');

    /* lead */
    Route::post('/lead', 'LeadsController@apiStore');

    /* Pre lead */
    Route::post('/pre_lead', 'LeadsController@apiPreLeadStore');

    /* Site contact */
    Route::post('/site_contact', 'SiteContactsController@store');

    /* New contractor request post */
    Route::post('/contractor', 'ContractorsController@apiStore');

    /* Route::get('/service/{id}', 'ApiController@getService');
    Route::get('/services', 'ApiController@getServices');

    Route::get('/question', 'ApiController@getQuestions');
    Route::get('/question/{id}', 'ApiController@getQuestion');
    Route::get('/question/service/{serviceId}', 'ApiController@getServiceFirstQuestion');
 */
    //Route::get('/site/{id}', 'ApiController@getSiteService');

    /* Route::post('/contact', 'ApiController@postContactForm'); */
    //Route::get('/questions', 'ApiController@getQuestions');
    //Route::get('/service/{serviceId}/questions', 'ApiController@getQuestionsByServiceId');
    
    
});
