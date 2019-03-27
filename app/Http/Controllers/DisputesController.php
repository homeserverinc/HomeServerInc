<?php

namespace App\Http\Controllers;

use App\Dispute;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\HomeServerController;

class DisputesController extends HomeServerController
{
    public $fields = [
        'charge.contractor.user.name' => 'Contractor',
        'charge.contractor.phone' => 'Phone',
        'charge.amount' => 'Amount (USD)',
        'type' => 'Type',
        'status' => 'Status',
        'reason' => 'Reason',
        'created_at' => 'Created',
    ];

    public $modelName = 'charge';
    public $recordName = 'uuid';


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request){

    	if (Auth::user()->canReadDispute()) {
	        if ($request->searchField) {
	                $disputes = Dispute::where('type', 'like', '%'.$request->searchField.'%')
	            ->orWhere('reason', 'like', '%'.$request->searchField.'%')
	            ->orWhere('created_at', 'like', '%'.$request->searchField.'%')
	            ->orderBy('created_at', 'desc')
	            ->paginate();
	            
	        } else {
	            $disputes = Dispute::orderBy('created_at', 'desc')->paginate();
	        }
	    } else {
	        return $this->accessDenied();
	    }

	    return View('dispute.index', [
	        'fields' => $this->fields,
	        'disputes' => $disputes
	    ]);
    }
}
