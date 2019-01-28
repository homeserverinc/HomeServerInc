<?php

namespace App\traits;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

/* API Response trait */
trait ApiResponse 
{
    public function getApiErrorMsg($error) {
        Log::debug($error);
        return [ 
            'error' => [
                'code' => $error->getCode(),
                'message' => $error->getMessage()
            ]
        ];
    }

    public function getApiResponse($data, $status = 'success', Array $old = []) {
        switch ($status) {
            case 'error':
                return response()->json([
                    'data' => $this->getApiErrorMsg($data),
                    'status' => $status
                ]);       
                break;
            
            case 'fail':
                $aux = [];
                foreach ($data->messages()->getMessages() as $fieldName => $message) {
                    array_push($aux, [
                        'fieldName' => $fieldName,
                        'message' => $message[0]
                    ]);
                }

                return response()->json([
                    'data' => Array(
                        'errors' => $aux,
                        'old' => $old
                    ),
                    'status' => $status
                ]);

                break;

            case 'success':
                return response()->json([
                    'data' => $data,
                    'status' => $status
                ]);       
                break;
        }
    }
}