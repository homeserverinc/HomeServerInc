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

Route::get('/', 'AppController@home');

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
Route::post('/dequeue', 'CallsController@dequeueCall');
Route::get('/playmoh', 'TwilioApiController@playMoH');

Route::post('/workspace-events', 'WebhooksController@workspaceEvents');

Route::post('/pusher-presence', 'WebhooksController@pusherPresenceEvent');
Route::post('/stripe-webhook', 'WebhooksController@stripeWebhook');


Route::prefix('/user')->group(function() {
    Route::get('/', 'HomeController@index')->name('user.dashboard');
});

Route::get('listen', 'AppController@callListen');

Route::get('/hangup', 'AppController@callHangup');

Route::get('/call-center', 'CallsController@callCenter');
Route::get('/token', 'CallsController@getToken');
Route::get('/recordings', 'CallsController@getRecordings');
Route::get('/agents', 'CallsController@getCurrentAgents');
Route::post('/get-call-info', 'CallsController@getCallInfo')->name('get-call-info');

Route::get('/routes/{phoneNumber}', 'CallRoutesController@getRoutesToPhone');

Route::post('/serviceProperties', 'PropertyServiceController@getServicePropertyJson');

Auth::routes();

Route::prefix('/admin')->middleware(['auth:web'])->group(function() {
    Route::get('/', 'AdminController@index')->name('admin.dashboard');    

    Route::get('/event', 'CallsController@incomingCall');
    Route::get('/categorize_lead', 'LeadsController@categorize_lead');

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
    Route::get('/quiz-questions-crud', 'QuizzesController@questionsCrud')->name('quiz-questions-crud');
    Route::get('/quizzes/json', 'QuizzesController@getQuizzes');
    //Route::get('/quiz/{quiz_uuid}', 'QuizzesController@getQuiz');
    Route::get('/quiz/{quiz_uuid}/questions', 'QuestionsController@getQuestionsFromQuiz');
    Route::post('/update-worker-activity', 'TwilioWorkersController@updateTwilioActivity')->name('update-worker-activity');
    Route::post('/get-current-worker-activity', 'TwilioWorkersController@getCurrentTwilioActivity')->name('get-current-worker-activity');
    Route::post('/get-activity-by-name', 'TwilioActivitiesController@getActivityByName');
    

    /**
     * Twilio Client Routes
     */

    Route::get('/twilio_client/get_token/{agent}', 'TwilioApiController@getToken');

    Route::post('/contractor/subscribe_plan', 'ContractorsController@subscribe_plan')->name('subscribe_plan');
    Route::post('/lead/dispatch_lead', 'LeadsController@dispatch_lead')->name('dispatch_lead');
    
    Route::get('/contractor/edit_profile', 'ContractorsController@edit_profile')->name('contractor_edit_profile');
    Route::match(['put', 'patch'], '/contractor/update_profile/{contractor}', 'ContractorsController@update_profile')->name('contractor_update_profile');
    Route::resource('/card', 'CardsController')->except('show');
    Route::resource('/plan', 'PlansController')->except('show');
    Route::resource('/filtered_lead', 'FilteredLeadsController');
    Route::resource('/charge', 'ChargesController')->except('show');
    Route::resource('/dispute', 'DisputesController')->except('show');
    Route::resource('/text', 'TextsController')->except('show');
    Route::resource('/text_type', 'TextTypesController')->except('show');
    Route::resource('/image', 'ImagesController')->except('show');
    Route::resource('/image_type', 'ImageTypesController')->except('show');

    /* methods used by Vue */
    Route::post('/crud-questions/add_question', 'QuestionsController@vueAddQuestion');
    Route::post('/crud-questions/edit_question', 'QuestionsController@vueEditQuestion');
    Route::post('/crud-questions/del_question', 'QuestionsController@vueDelQuestion');
    Route::post('/crud-questions/add_answer', 'QuestionsController@vueAddAnswer');
    Route::post('/crud-questions/link_answer_questinon', 'QuestionsController@vueLinkOnAnswer');
    Route::post('/crud-questions/edit_answer', 'QuestionsController@vueEditAnswer');
    Route::post('/crud-questions/del_answer', 'QuestionsController@vueDelAnswer');
    Route::get('/quiz-get-categories', 'CategoriesController@vueGetCategories');
    Route::get('/quiz-get-quiz/{category}', 'QuizzesController@apiGetQuiz');
    Route::get('/quiz-get-lead/{lead}', 'LeadsController@apiGetLead');

    Route::resource('/category', 'CategoriesController')->except('show');
    Route::resource('/category_lead', 'CategoryLeadsController')->except('show');
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
    Route::resource('/question', 'QuestionsController')->except('show');
    Route::resource('/quiz', 'QuizzesController')->except('show');
    Route::resource('/missed_call', 'MissedCallsController');
    Route::resource('/site_contact', 'SiteContactsController')->except('show', 'create', 'destroy');
    Route::resource('/contractor', 'ContractorsController')->except('show');
    Route::resource('/twilio_workspace', 'TwilioWorkspacesController')->except('show');
    Route::resource('/twilio_workflow', 'TwilioWorkflowsController')->except(['show', 'create', 'store', 'destroy']);
    Route::resource('/twilio_activity', 'TwilioActivitiesController')->except(['show', 'create', 'store', 'destroy']);
    Route::resource('/twilio_configuration', 'TwilioConfigurationsController')->except(['show', 'create', 'store', 'destroy']);
    Route::resource('/music_on_hold', 'MusicOnHoldsController')->except('show');


    /* Route::get('/teste', function() {
        return View('teste');
    }); */
});