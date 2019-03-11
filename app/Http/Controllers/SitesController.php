<?php

namespace App\Http\Controllers;

use App\City;
use App\Site;
use App\Phone;
use App\State;
use App\Service;
use App\Category;
use App\traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\HomeServerController;

class SitesController extends HomeServerController
{
    use ApiResponse;

    public $fields = [
        'uuid' => 'UUID',
        'name' => 'Name',
        'friendly_name' => 'Phone',
        'state_code' => 'State',
        'city' => 'City'
    ];

    protected $modelName = 'site';
    protected $recordName = 'name';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    { 
        if (Auth::user()->canReadSite()) {
            if ($request->searchField) {
                $sites = DB::table('sites')
                            ->select('sites.*', 'states.state_code', 'cities.city', 'phones.friendly_name')
                            ->join('cities', 'cities.id', 'sites.city_id')
                            ->join('phones', 'phones.id', 'sites.phone_id')
                            ->join('states', 'states.id', 'cities.state_id')
                            ->where('sites.name', 'like', '%'.$request->searchField.'%')
                            ->where('sites.phone', 'like', '%'.$request->searchField.'%')
                            ->where('cities.city', 'like', '%'.$request->searchField.'%')
                            ->paginate();
            } else {
                $sites = DB::table('sites')
                            ->select('sites.*', 'states.state_code', 'cities.city', 'phones.friendly_name')
                            ->join('cities', 'cities.id', 'sites.city_id')
                            ->join('phones', 'phones.id', 'sites.phone_id')
                            ->join('states', 'states.id', 'cities.state_id')
                            ->paginate();
            }

            return View('site.index', [
                'sites' => $sites,
                'fields' => $this->fields
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateSite()) {
            $cities = City::limit(0)->offset(0)->get();
            $phones = Phone::doesntHave('site')->get();
            $voicemessage = env('VOICEMESSAGE_DEFAULT_MSG');
            $categories = Category::orderBy('category', 'asc')->get();
            $states = State::all();

            return View('site.create', [
                'cities' => $cities,
                'phones' => $phones,
                'voicemessage' => $voicemessage,
                'categories' => $categories,
                'states' => $states
            ]);
        } else {
           return $this->accessDenied();
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Auth::user()->canCreateSite()) {
            $this->validate($request, [
                'name' => 'string|required|unique:sites',
                'phone_id' => 'required',
                'state_id' => 'required',
                'city_id' => 'required',
            ]);

            try {
                
                DB::beginTransaction();
                
                $categories = Category::whereIn('uuid', $request->categories)->get();

                $site = new Site($request->all());
                
                $site = $this->createRecord($site, false);

                $site->categories()->sync($categories);


                DB::commit();

                return $this->createSuccess($site);
            } catch (\Exception $e) {
                
                DB::rollback();
                
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function edit(Site $site)
    {
        if (Auth::user()->canUpdateSite()) {
            $categories = Category::orderBy('category', 'asc')->get();
            $phones = Phone::whereDoesntHave('site', function($query) use ($site) {
                $query->where('uuid', '!=', $site->uuid);
            })->get();
            $states = State::all();
            $cities = City::where('state_id', $site->state_id)->get();

            $assigned_categories = array();
            foreach ($site->categories as $category) {
                $assigned_categories[] = $category->uuid;
            }

            return View('site.edit', [
                'site' => $site,
                'categories' => $categories,
                'cities' => $cities,
                'phones' => $phones,
                'states' => $states,
                'assigned_categories' => $assigned_categories
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Site $site)
    {
        if (Auth::user()->canUpdateSite()) {
            //dd($site);
            $this->validate($request, [
                //'name' => 'string|required|unique:sites,uuid,'.$site->uuid,
                'phone_id' => 'required',
                'state_id' => 'required',
                'city_id' => 'required',
            ]);

            try {
                
                DB::beginTransaction();
                
                $categories = Category::whereIn('uuid', $request->categories)->get();

                $site->fill($request->all());

                $site = $this->updateRecord($site, false);

                $site->categories()->sync($categories);

                DB::commit();

                return $this->updateSuccess($site);
            } catch (\Exception $e) {
                
                DB::rollback();
                
                return $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function destroy(Site $site)
    {
        if (Auth::user()->canDeleteSite()) {
            return $this->deleteRecord($site);
        } else {
            return $this->accessDenied();
        }
    }

    public function apiGetSite($uuid) {
        try {
            $site = Site::with(['city.state', 'phone', 'categories'])
                        ->where('uuid', $uuid)->first();
            return $this->getApiResponse($site);
        } catch (\Exception $e) {
            return $this->getApiResponse($e, 'error');
        } 
    }
}
