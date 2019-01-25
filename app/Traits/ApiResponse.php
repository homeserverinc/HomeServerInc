<?php

namespace App\traits;

use Illuminate\Support\Facades\Validator;

/* API Response trait */
trait ApiResponse 
{
    public function getApiErrorMsg(Object $error) {
        return [ 
            'error' => [
                'code' => $error->getCode(),
                'message' => $error->getMessage()
            ]
        ];
    }

    public function getApiResponse(Object $data, $status = 'success') {
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
                $errors = [
                    'errors' => $aux
                ];
                return response()->json([
                    'data' => $errors,
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