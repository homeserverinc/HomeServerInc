<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Database\Eloquent\Relations\Relation;

class HomeServerController extends Controller
{
    protected $indexUrl = 'index';
    protected $modelName = '';
    protected $recordName = '';

    protected function accessDenied() {
        Session::flash('error', __('messages.access_denied'));
        
        return redirect()->back();
    }

    protected function doOnException(\Exception $exception, bool $goToIndex = false) {
        switch ($exception->getCode()) {
            case 23000:
                Session::flash('error', __('messages.fk_error'));
                break;
            default:
                Session::flash('error', __('messages.exception', [
                    'exception' => $exception->getMessage()
                ]));
                break;
        }

        if (env('APP_DEBUG')) {
            Log::debug($exception);
        }

        if ($goToIndex) {
            return $this->goToIndex();
        } else {
            return redirect()->back()->withInput();
        }
    }

    protected function createRecord(Model $model, bool $returnSessionMessage = true) {
        if ($model->save()) {
            if ($returnSessionMessage) {
                return $this->createSuccess($model);
            } else {
                return $model;
            }
        } else {
            throw new \Exception(__('messages.create_error', [
                'model' => __('models.'.$this->modelName),
                'name' => $model->{$this->recordName}
            ]));
        }
    }

    protected function updateRecord(Model $model, bool $returnSessionMessage = true) {
        if ($model->save()) {
            if ($returnSessionMessage) {
                return $this->updateSuccess($model);
            } else {
                return $model;
            }
        } else {
            throw new \Exception(__('messages.update_error', [
                'model' => __('models.'.$this->modelName),
                'name' => $model->{$this->recordName}
            ]));
        }
    }

    protected function deleteRecord(Model $model) {
        try {
            if ($model->delete()) {
                Session::flash('success', __('messages.delete_success', [
                    'model' => __('models.'.$this->modelName),
                    'name' => $model->{$this->recordName}
                ]));
            } else {
                Session::flash('success', __('messages.delete_error', [
                    'model' => __('models.'.$this->modelName),
                    'name' => $model->{$this->recordName}
                ]));
            }

            return $this->goToIndex();

        } catch (\Exception $e) {
            return $this->doOnException($e, true);
        }
    }

    protected function createSuccess(Model $model) {
        Session::flash('success', __('messages.create_success', [
            'model' => __('models.'.$this->modelName),
            'name' => $model->{$this->recordName}
        ]));

        return $this->goToIndex();
    }

    protected function updateSuccess(Model $model) {
        Session::flash('success', __('messages.update_success', [
            'model' => __('models.'.$this->modelName),
            'name' => $model->{$this->recordName}
        ]));

        return $this->goToIndex();
    }

    protected function warningMessage(String $message) {
        Session::flash('error', $message);

        return $this->goToIndex();
    }

    protected function successMessage(String $message, bool $redirect = false) {
        Session::flash('success', $message);

        return $redirect ? $this->goToIndex() : redirect()->back();
    }

    protected function goToIndex() {
        $currentClass = explode('\\', get_called_class());
        $indexRoute = $currentClass[sizeOf($currentClass)-1].'@'.$this->indexUrl;

        return redirect()->action($indexRoute);
    }
}
