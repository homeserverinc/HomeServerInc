<div class="container-fluid">
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="{{ url('/') }}">
            {{--  <img src="{{ asset('images/company_logo.png') }}">  --}}
            {{ env('APP_NAME') }}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <ul class="nav-item">
                @permission('list-cities')
                <li class="nav-item">
                    <a class="nav-link {{Nav::isResource('city')}}" href="{{route('city.index')}}">Cities</a>
                </li>  
                @endpermission
                <li class="dropdown">
                    <a class="dropdown-toggle {{Nav::isResource('site')}}{{Nav::isResource('callroute')}}{{Nav::isResource('phone')}}" data-toggle="dropdown" href="#">
                        Sites
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        @permission('list-sites')
                        <li><a href="{{route('site.index')}}">Sites</a></li>
                        @endpermission
                        {{--  <li class="divider"></li>  --}}
                        {{--  <li class="divider"></li>  --}}
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{Nav::isResource('agent')}}" href="{{route('agent.index')}}">Agents</a>
                </li>

                <li class="dropdown">
                    <a class="dropdown-toggle {{Nav::isResource('service')}}{{Nav::isResource('category')}}{{Nav::isResource('property_service')}}{{Nav::isResource('property')}}" data-toggle="dropdown" href="#">
                        Services
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="{{route('service.index')}}">Services</a></li>
                        <li class="divider"></li>
                        @permission('list-categories')
                        <li><a href="{{route('category.index')}}">Categories</a></li>
                        @endpermission
                        <li><a href="{{route('property.index')}}">Properties</a></li>
                        <li><a href="{{route('property_service.index')}}">Services vs Properties</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a class="dropdown-toggle {{Nav::isResource('sip_domain')}}{{Nav::isResource('sip_credential_list')}}{{Nav::isResource('sip_credential')}}{{Nav::isResource('sip_credential_list_sip_domain')}}" data-toggle="dropdown" href="#">
                        Voice
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        @permission('list-phones')
                        <li><a href="{{route('phone.index')}}">Phones</a></li>
                        @endpermission
                        @permission('list-callroutes')
                        <li><a href="{{route('callroute.index')}}">Call Route</a></li>
                        @endpermission
                        <li class="divider"></li>
                        @permission('list-sip-domain')
                        <li><a href="{{route('sip_domain.index')}}">Sip Domain</a></li>
                        @endpermission
                        @permission('list-sip-credential-list')
                        <li><a href="{{route('sip_credential_list.index')}}">Sip Credential Lists</a></li>
                        @endpermission
                        @permission('list-sip-credential')
                        <li><a href="{{route('sip_credential.index')}}">Sip Credetials</a></li>
                        @endpermission
                        @permission('list-sip-credential-list-sip-domain')
                        <li><a href="{{route('sip_credential_list_sip_domain.index')}}">Sip Credential Lists vs Sip Domains</a></li>
                        @endpermission
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{Nav::isResource('lead')}}" href="{{route('lead.index')}}">Leads</a>
                </li>
                
                {{--  @permission('read-acl')  --}}
                <li class="dropdown">
                    <a class="dropdown-toggle {{Nav::isResource('role')}}{{Nav::isResource('permission')}}" data-toggle="dropdown" href="#">
                        ACL
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        @permission('list-users')
                        <li class="nav-item">
                            <a class="nav-link {{Nav::isResource('user')}}" href="{{route('user.index')}}">Users</a>
                        </li>
                        @endpermission
                        <li class="divider"></li>
                        <li><a href="{{route('permission.index')}}">Permissions</a></li>
                        <li><a href="{{route('role.index')}}">Roles</a></li>
                        <li><a href="{{route('role_user.index')}}">Users vs Roles</a></li>
                    </ul>
                </li>
                {{--  @endpermission  --}}
                {{--  @endauth
                @auth('web')
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        User
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Combustíveis</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Tanques</a></li>
                    </ul>
                </li>  
                @endauth
                @guest;
                @endguest
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li class="disabled"><a href="#">Disabled</a></li> 
                </ul> --}}
            </ul>
        </div>
    </nav>
</div>


<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">

            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- Branding Image -->
            <a class="navbar-brand" href="{{ url('/') }}">
                {{--  <img src="{{ asset('images/logo_golden.png') }}" alt="Golden Service - Controle de Frotas">  --}}
                {{env('APP_NAME')}}
            </a>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            

            <!-- Right Side Of Navbar -->
            <ul class="nav-item navbar-right"> 
                <!-- Authentication Links -->
                @guest
                    <li><a href="{{ route('login') }}"><span class="glyphicon glyphicon-user"></span> Sing in</a></li>
                    {{--  <li><a href="{{ route('register') }}">Register</a></li>  --}}
                @else
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle {{Nav::isResource('my')}}" data-toggle="dropdown" role="button" aria-expanded="false">
                            <span class="glyphicon glyphicon-user"></span>  {{ Auth::user()->name }} <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <li><a href="{{route('user.profile')}}"><i class="glyphicon glyphicon-cog"></i> Profile</a></li>
                            <li class="divider"></li>
                            <li>
                                <a href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                    <span class="glyphicon glyphicon-off"></span> Logout
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        </ul>
                    </li>
                @endguest
            </ul>
        </div>
    </div>
</nav>
<incomingcall user-id="{{ Auth::id() }}" dst-route="{{ route('lead.create') }}"></incomingcall>

@component('layouts.session_messages')
@endcomponent