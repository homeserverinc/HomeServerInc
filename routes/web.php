<?php

use App\SipDomain;
use App\Events\CallEvent;
use App\Events\NewLeadEvent;
use Illuminate\Http\Request;
use App\Events\CallEndedEvent;
use App\Events\CallRingingEvent;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\CallsController;

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

Route::get('/', function() {
    return redirect()->route('admin.dashboard');
});

/* Route::get('/sms', function() {
    $teste = new CallsController;
    $teste->sendSMSMessage('+17815580318', '+18572142300', 'funcionou?');
}); */

Route::get('/incoming', 'CallsController@incoming'); 
Route::get('/ura', 'CallsController@ura'); 
Route::post('/enqueue-call', 'CallsController@enqueueCall');
Route::post('/workflow-callback', 'CallsController@workflowCallbak');
Route::get('/callstatus', 'CallsController@callStatus');
Route::get('/outgoing', 'CallsController@outgoing');
Route::get('/sipstatus', 'CallsController@sipStatus');
Route::post('dequeue', 'CallsController@dequeueCall');

Route::post('/workspace-events', 'WebhooksController@workspaceEvents');

Route::post('/pusher-presence', 'WebhooksController@pusherPresenceEvent');


Route::prefix('/user')->group(function() {
    Route::get('/', 'HomeController@index')->name('user.dashboard');
});

Route::get('listen', function() {
    return View('receiving_call');
});

Route::get('/hangup', function() {
    event(new CallEndedEvent(
        1
    ));
});

Route::get('/call-center', 'CallsController@callCenter');
Route::get('/token', 'CallsController@getToken');
Route::get('/recordings', 'CallsController@getRecordings');
Route::get('/agents', 'CallsController@getCurrentAgents');
Route::post('/get-call-info', 'CallsController@getCallInfo')->name('get-call-info');

Route::get('/routes/{phoneNumber}', 'CallRoutesController@getRoutesToPhone');

Route::post('/serviceProperties', 'PropertyServiceController@getServicePropertyJson');

Auth::routes();
//middleware(['auth:web'])->
Route::prefix('/admin')->middleware(['auth:web'])->group(function() {
    Route::get('/', 'AdminController@index')->name('admin.dashboard');    

    Route::get('/event', 'CallsController@incomingCall');

    Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login');  

    Route::get('/my/profile', 'UsersController@profile')->name('user.profile');
    Route::get('/my/change-password', 'UsersController@showChangePassword')->name('user.form.change.password');
    Route::put('/my/change-password/{user}', 'UsersController@changePassword')->name('user.change.password');

    Route::get('/contact', 'ContactsController@index')->name('contact.index');

    Route::get('/lead/{contact}/from-contact', 'LeadsController@createFromContact')->name('lead.create_from_contact');
    Route::post('/service_property', 'PropertyServiceController@newServiceProperty')->name('new-service-property');
    Route::post('/service_property/remove', 'PropertyServiceController@removePropertyFromCurrentSession')->name('remove-property-from-current-session');

    Route::post('/properties/json', 'PropertiesController@getPropertiesJson')->name('properties.json');
    Route::post('/cities/json', 'CitiesController@getCitiesJson')->name('cities.json');
    Route::post('/quizzes/json/', 'QuizzesController@getQuizzesJson')->name('quizzes.json');
    Route::post('/customers/autocomplete', 'CustomersController@getCustomerByName')->name('customers.autocomplete');
    Route::post('/customers/customer-by-id', 'CustomersController@getCustomerById')->name('customer-by-id');
    Route::post('/cities/city-by-id', 'CitiesController@getCitiesByStateId')->name('city-by-id');
    Route::post('/property-service/json', 'PropertyServiceController@getServicePropertyJson')->name('service-properties.json');
    Route::post('/dynamic/service', 'DynamicFormController@servicePropertyForm')->name('dynamic-service-form');
    Route::get('/question-types/json', 'QuestionTypesController@questionTypesJson')->name('question-types.json');

    Route::get('/service-first-question/{service_id}', 'ApiController@getServiceFirstQuestion')->name('get-first-service-question');
    Route::get('/question-by-uuid/{question_uuid}', 'ApiController@getQuestion')->name('get-question-by-id');
    Route::get('/list-answer-types/{question_uuid}', 'ApiController@getAnswerTypes');
    Route::get('/answer-types', 'ApiController@answerTypes');
    Route::get('/question-types', 'ApiController@questionTypes');
    Route::get('/list_questions/{except}', 'ApiController@getQuestions');   
    Route::get('/list_questions', 'ApiController@getQuestions');   
    Route::get('/questions/except/{uuid}', 'QuestionsController@getQuestionsExcept'); 
    Route::get('/questions/except', 'QuestionsController@getQuestionsExcept'); 
    Route::get('/import-phone-numbers', 'PhonesController@importNumbersFromTwilio')->name('import-phone-numbers'); 
    Route::get('/import-twilio-workspaces', 'TwilioWorkspacesController@importWorkspacesFromTwilio')->name('import-twilio-workspaces');
    Route::get('/import-twilio-workflows', 'TwilioWorkflowsController@importWorkflowsFromTwilio')->name('import-twilio-workflows');
    Route::get('/import-twilio-activities', 'TwilioActivitiesController@importActivitiesFromTwilio')->name('import-twilio-activities');
    Route::post('/update-worker-activity', 'TwilioWorkersController@updateTwilioActivity')->name('update-worker-activity');
    Route::post('/get-current-worker-activity', 'TwilioWorkersController@getCurrentTwilioActivity')->name('get-current-worker-activity');

    Route::resource('/category', 'CategoriesController')->except('show');
    Route::resource('/city', 'CitiesController')->except('show');
    Route::resource('/site', 'SitesController')->except('show');
    Route::resource('/user', 'UsersController')->except('show');    
    Route::resource('/agent', 'AgentsController')->except('show');
    Route::resource('/phone', 'PhonesController')->except('show');
    Route::resource('/property', 'PropertiesController');
    Route::resource('/service', 'ServicesController')->except('show');
    Route::resource('/lead', 'LeadsController');
    Route::resource('/property_service', 'PropertyServiceController');
    Route::resource('/question_service', 'QuestionServiceController');
    Route::resource('/role', 'RolesController')->except('show');
    Route::resource('/permission', 'PermissionsController')->except('store', 'destroy', 'create', 'show');
    Route::resource('/callroute', 'CallRoutesController')->except('show');
    Route::resource('/recording', 'RecordingsController');
    Route::resource('/customer', 'CustomersController');
    Route::resource('/sip_domain', 'SipDomainsController');
    Route::resource('/sip_credential_list', 'SipCredentialListsController')->except('show');
    Route::resource('/sip_credential', 'SipCredentialsController')->except('show');
    Route::resource('/sip_credential_list_sip_domain', 'SipCredentialListSipDomainsController');
    Route::resource('/question', 'QuestionsController');
    Route::resource('/quiz', 'QuizzesController')->except('show');
    Route::resource('/missed_call', 'MissedCallsController');
    Route::resource('/site_contact', 'SiteContactsController')->except('show', 'create', 'destroy');
    Route::resource('/contractor', 'ContractorsController')->except('show');
    Route::resource('/twilio_workspace', 'TwilioWorkspacesController')->except('show');
    Route::resource('/twilio_workflow', 'TwilioWorkflowsController')->except(['show', 'create', 'store', 'destroy']);
    Route::resource('/twilio_activity', 'TwilioActivitiesController')->except(['show', 'create', 'store', 'destroy']);
    Route::resource('/twilio_configuration', 'TwilioConfigurationsController')->except(['show', 'create', 'store', 'destroy']);



    Route::get('/teste', function() {
        return View('teste');
    });
});