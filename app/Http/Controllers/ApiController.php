<?php

namespace App\Http\Controllers;

use App\Lead;
use App\Site;
use App\Category;
use App\Customer;
use App\Property;
use App\Question;
use App\AnswerType;
use App\QuestionType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class ApiController extends Controller
{
    public function __constructor() {
        $this->middleware(['jwt.auth']);
        $this->auth()->shouldUse('api');
    }

    protected function getResponse() {
        return array('response' => []);
    }

    protected function getResponseCode($code) {
        $response = $this->getResponse();
        $response['response']['status'] = $code;
        $response['response']['message'] = $this->getStatusMsg($code);

        return $response;
    }

    protected function getStatusMsg($code) {
        switch ($code) {
            case 200:
                return 'ok';
                break;
        }
    }

    public function getCategoryFirstQuestion($categoryUUID) {
        $category = Category::find($categoryUUID);

        $response = $this->getResponseCode(200);
        $response['data'] = $category->question()->with('answers.answer_type')->first();

        return response()->json($response);
    }

    public function getCategory($uuid) {
        if ($id) {
            $category = Category::with('category')
                            ->with('quiz')
                            ->where('uuid', $uuid)->first();
            $response = $this->getResponseCode(200);
            $response['data'] = $category;
        } else {
            $response = null;
        }

        return response()->json($response);
    }

    public function getCategories() {
        $categories = Category::get()->toTree();
        $response = $this->getResponseCode(200);
        $response['data'] = $categories;

        return response()->json($response);
    }

    public function getSiteCategory($siteId) {
        $site = Site::with('city.state')
                            ->with('phone')->find($siteId);
        $category = Category::with('category')
                            ->with('question.questionType')
                            ->with('question.answers')
                            ->ancestorsAndSelf($site->category_uuid);

        $response = $this->getResponseCode(200);
        $response['data']['site'] = $site;
        $response['data']['site']['category'] = $category;

        return response()->json($response);
    }

    public function postContactForm(Request $request) {
        /* 
            Parei aqui neste método.
            Preciso formatar o post e os campos que deverão ser informados,
            validar os dados passados, 
            a utilização dos dados, 
            a persistência dos mesmos na base de dados,
            o retorno via API
        
        */ 
        DB::beginTransaction();
        try {
            $site = Site::find($request->site_id);
            $category = Category::find($site->category_uuid);   
            $customer = $this->createCustomer($request, $site->city_id);

            Log::info($customer);

            $lead = new Lead;


            $lead->customer_id = $customer->id;
            $lead->category_uuid = $category->id;
            $lead->description = $request->description;
            $lead->category_properties = $this->getCategoryPropertiesValues($request, $category->id);
            $lead->user_id = Auth::id();

            if ($lead->save()) {
                DB::commit();

                $response = $this->getResponseCode(200);
                $response['data'] = $lead;
                
                return $response;
            } else {
                
                return response()->json(['error' => 'cant create lead...']);
            }
        } catch (\Exception $e) {
            DB::rollback();
        }

    }

    protected function createCustomer(Request $request, $city_id) {
        /* $this->validate($request, [
            'name' => 'required|string|min:5',
            'address' => 'present|string',
            'city_id' => 'present|numeric',
            'email1' => 'email|required',
            'email2' => 'present|email',
            'phone1' => 'string|required',
            'phone2' => 'present|string'
        ]); */

        try {
            $customer = Customer::firstOrCreate(
                [
                    'email1' => $request->email1
                ],
                [
                    'name' => $request->name,
                    'address' => $request->address,
                    'city_id' => $city_id,
                    'email2' => $request->email2,
                    'phone1' => $request->phone1,
                    'phone2' => $request->phone2
                ]);
            
            return $customer;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function getQuestions(Int $except = null) {
        $questions = Question::with('answers.answer_type')->get()->except($except); 

        $response = $this->getResponseCode(200);
        $response['data'] = $questions;

        return response()->json($response);
    }

    public function getQuestionsByCategoryUuid($categoryUuid) {
        $questions = Category::with('questions')->with('answers.answer_type')->where('uuid', $categoryUuid)->first();

        $response = $this->getResponseCode(200);
        $response['data'] = $questions;

        return response()->json($response);
    }

    public function getQuestion($questionUuid) {
        $question = Question::with('answers.answer_type')->where('uuid', $questionUuid)->first();

        $response = $this->getResponseCode(200);
        $response['data'] = $question;

        return response()->json($response);
    }

    public function getAnswerTypes($questionTypeUuid) {
        $answerTypes = AnswerType::where('question_type_uuid', $questionTypeUuid)->orderBy('answer_type', 'asc')->get();

        return response()->json($answerTypes);
    }

    public function answerTypes() {
        return AnswerType::orderBy('answer_type', 'asc')->get()->toJson();
    }

    public function questionTypes() {
        return QuestionType::orderBy('question_type', 'asc')->get()->toJson();
    }
}
