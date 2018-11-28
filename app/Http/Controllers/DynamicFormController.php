<?php

namespace App\Http\Controllers;

use App\ServiceProperty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DynamicFormController extends Controller
{
    public function servicePropertyForm(Request $request) {
        if (isset($request->values)) {
            $values = json_decode($request->values, true);
        } else {
            $values = null;
        }
        
        $fields = $this->processFormCreation($this->getServiceProperties($request->id), $values);

        return View('dynamic.dynamic')->withFields($fields);
    }

    protected function processFormCreation($serviceProperties, $values = null) {
        $fields = array();
        foreach ($serviceProperties as $serviceProperty) {
            $fields[] = $this->getField($serviceProperty, $values);
        }

        return $fields;
    }

    protected function getServiceProperties($serviceId) {
        return DB::table('property_service')
                    ->select('property_service.*', 'services.*', 'properties.*')
                    ->join('services', 'services.id', 'property_service.service_id')
                    ->join('properties', 'properties.id', 'property_service.property_id')
                    ->where('services.id', '=', $serviceId)
                    ->get();
    }

    protected function getField($serviceProperty, $values = null) {
        $field = null;
        switch ($serviceProperty->property_type_id) {
            case 1:
            case 3:
            case 4:
                /* input text */
                $field = $this->getFieldText($serviceProperty, $values);
                break;
            case 2:
                /* textarea */
                $field = $this->getFieldTextarea($serviceProperty, $values);
                break;
            case 5:
                /* date */
                $field = $this->getFieldDate($serviceProperty, $values);
                break;
            case 6:
                /* time */
                $field = $this->getFieldTime($serviceProperty, $values);
                break;
            case 7:
                /* datetime */
                $field = $this->getFieldDateTime($serviceProperty, $values);
                break;
            case 8:
                /* input checkbox */
                $field = $this->getFieldCheckbox($serviceProperty, $values);
                break;
            case 9:
                /* select */
                $field = $this->getFieldSelect($serviceProperty, $values);
                break;       
        }

        return $field;
    }

    protected function getFieldCommon($serviceProperty) {
        $field = [
            'field' => $serviceProperty->property_name,
            'label' => $serviceProperty->property_label,
            'required' => $serviceProperty->is_required,
            'inputSize' => $serviceProperty->field_size,
            'div_css' => 'margin-bottom-15',
        ];
        return $field;
    }

    protected function getFieldText($serviceProperty, $values = null) {
        $field = [
            'type' => 'text',
            'inputValue' => $values[$serviceProperty->property_name]
        ];

        return array_merge($field, $this->getFieldCommon($serviceProperty));
    }

    protected function getFieldTextArea($serviceProperty, $values = null) {
        $field = [
            'type' => 'textarea',
            'inputValue' => $values[$serviceProperty->property_name]
        ];

        return array_merge($field, $this->getFieldCommon($serviceProperty));
    }

    protected function getFieldDate($serviceProperty, $values = null) {
        $field = [
            'type' => 'datetime',
            'dateTimeFormat' => 'YYYY/MM/DD',
            'inputValue' => $values[$serviceProperty->property_name]
        ];

        return array_merge($field, $this->getFieldCommon($serviceProperty));
    }

    protected function getFieldTime($serviceProperty, $values = null) {
        $field = [
            'type' => 'datetime',
            'dateTimeFormat' => 'hh:mm:ss a',
            'inputValue' => $values[$serviceProperty->property_name]
        ];

        return array_merge($field, $this->getFieldCommon($serviceProperty));
    }

    protected function getFieldDateTime($serviceProperty, $values = null) {
        $field = [
            'type' => 'datetime',
            'inputValue' => $values[$serviceProperty->property_name]
        ];

        return array_merge($field, $this->getFieldCommon($serviceProperty));
    }

    protected function getFieldCheckbox($serviceProperty, $values = null) {
        if (isset($values)) {
            $indexSelected = $values[$serviceProperty->property_name];       
        } else {
            $indexSelected = 1;
        }
        $field = [
            'type' => 'select',
            'items' => ['No', 'Yes'],
            'indexSelected' => $indexSelected
        ];

        return array_merge($field, $this->getFieldCommon($serviceProperty));
    }

    protected function getFieldSelect($serviceProperty, $values = null) {
        if (isset($values)) {
            $indexSelected = $values[$serviceProperty->property_name];       
        } else {
            $indexSelected = -1;
        }
        $field = [
            'type' => 'select',
            'items' => json_decode($serviceProperty->property_options, true),
            'indexSelected' => $indexSelected
        ];

        return array_merge($field, $this->getFieldCommon($serviceProperty));
    }
}
