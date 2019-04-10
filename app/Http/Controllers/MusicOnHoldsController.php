<?php

namespace App\Http\Controllers;

use App\MusicOnHold;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\HomeServerController;
use ArieTimmerman\Laravel\URLShortener\URLShortener;


class MusicOnHoldsController extends HomeServerController
{
    public $fields = [
        'uuid' => 'UUID',
        'description' => 'Description',
        'short_url' => ['label' => 'URL', 'type' => 'url'],
        'file_path' => ['label' => 'File', 'type' => 'audio']
    ];

    protected $modelName = 'music_on_hold';
    protected $recordName = 'description';

    public $path = 'public/audio/moh';        

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::user()->canReadMusicOnHold()) {
            if ($request->searchField) {
                $musicOnHolds = MusicOnHold::where('description' , 'like', '%'.$request->searchField.'%')
                        ->orderBy('description', 'asc')
                        ->paginate();
            } else {
                $musicOnHolds = MusicOnHold::orderBy('description', 'asc')
                        ->paginate();
            }

            return View('music_on_hold.index', [
                'fields' => $this->fields,
                'music_on_holds' => $musicOnHolds
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->canCreateMusicOnHold()) {
            return View('music_on_hold.create');
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
        if (Auth::user()->canCreateMusicOnHold()) {
            $this->validate($request, [
                'description' => 'required',
                'file_name' => 'required|unique:music_on_holds',
            ]);

            try {
                $musicOnHold = new MusicOnHold($request->all());
                $path = $request->file('file_name')->store($this->path);
                $musicOnHold->file_path = Storage::url($path);
                $musicOnHold->file_name = $path;
                $musicOnHold->short_url = (string)URLShortener::shorten($musicOnHold->file_path);

                return $this->createRecord($musicOnHold);

            } catch (\Exception $e) {
                $this->doOnException($e);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\MusicOnHold  $musicOnHold
     * @return \Illuminate\Http\Response
     */
    public function edit(MusicOnHold $musicOnHold)
    {
        if (Auth::user()->canUpdateMusicOnHold()) {
            return View('music_on_hold.edit', [
                'musicOnHold' => $musicOnHold
            ]);
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\MusicOnHold  $musicOnHold
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MusicOnHold $musicOnHold)
    {
        if (Auth::user()->canUpdateMusicOnHold()) {
            $this->validate($request, [
                'description' => 'required'
            ]);

            try {
                $oldFile = $musicOnHold->file_name;
                $oldShortUrl = false;

                $musicOnHold->fill($request->all());
                if (isset($request->file_name)) {
                    $oldShortUrl = $musicOnHold->file_path;
                    $path = $request->file('file_name')->store($this->path);
                    $musicOnHold->file_path = Storage::url($path);
                    $musicOnHold->file_name = $path;
                    $musicOnHold->short_url = (string)URLShortener::shorten($musicOnHold->file_path);
                }
                return $this->updateRecord($musicOnHold);

            } catch (\Exception $e) {
                $oldFile = $path ?? null;
                return $this->doOnException($e);
            } finally {
                /* remove short url */
                if ($oldShortUrl) {
                    $shortUrl = ArieTimmerman\Laravel\URLShortener\URL::where('url', $oldShortUrl)->first();
                    $shortUrl->delete();
                }

                /* remove storage file */
                Storage::delete($oldFile);
            }
        } else {
            return $this->accessDenied();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MusicOnHold  $musicOnHold
     * @return \Illuminate\Http\Response
     */
    public function destroy(MusicOnHold $musicOnHold)
    {
        if (Auth::user()->canDeleteMusicOnHold()) {
            try {
                return $this->deleteRecord($musicOnHold);
            } finally {
                /* remove short url */
                $shortUrl = ArieTimmerman\Laravel\URLShortener\URL::where('url', $musicOnHold->file_path)->first();
                $shortUrl->delete();

                /* remove storage file */
                Storage::delete($musicOnHold->file_name);
            }
        } else {
            return $this->accessDenied();
        }
    }
}
