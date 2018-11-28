<?php

namespace App\Providers;

use App\SipCredentialListSipDomain;
use Illuminate\Support\ServiceProvider;
use App\Observers\SipCredentialListSipDomainObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
