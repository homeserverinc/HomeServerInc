<nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
    <a class="navbar-brand" href="{{ url('/') }}">
        {{--  <img src="{{ asset('images/company_logo.png') }}">  --}}
        {{ env('APP_NAME') }}
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavBar" aria-controls="mainNavBar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNavBar">
        {{--  left align  --}}
        <ul class="nav navbar-nav mr-auto">
            {{--  people  --}}
            @ability(Auth::user()->roles->first()->name, ['read-agent', 'read-user', 'read-role', 'read-permission'], ['validate_all' => true])
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPeople" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    People
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownPeople">
                    @permission('read-agent')
                    <li><a class="dropdown-item" href="{{ route('agent.index') }}">Agents</a></li>
                    @endpermission
                    <li>
                        <a class="dropdown-item dropdown-toggle" href="#">Users</a>
                        <ul class="dropdown-menu">
                            @permission('read-user')
                            <li><a class="dropdown-item" href="{{ route('user.index') }}">Users</a></li>
                            @endpermission
                            <div class="dropdown-divider"></div>
                            @permission('read-role')
                            <li><a class="dropdown-item" href="{{ route('role.index') }}">Roles</a></li>
                            @endpermission
                            @permission('read-permission') 
                            <li><a class="dropdown-item" href="{{ route('permission.index') }}">Permissions</a></li>
                            @endpermission
                        </ul>
                    </li>
                </ul>
            </li>
            @endability
            {{--  cities  --}}
            @permission('read-city')
            <li class="nav-item">
                <a class="nav-link" href="{{route('city.index')}}">Cities</a>
            </li>  
            @endpermission

            {{--  sites  --}}
            
            @ability(Auth::user()->roles->first()->name, 'read-site|read-contractor|read-site-contact', ['validate_all' => true]) 
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownSites" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sites
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownSites">
                    <a class="dropdown-item" href="{{ route('site.index') }}">Sites</a>
                    <div class="dropdown-divider"></div>
                    @permission('read-site-contact') 
                        <a class="dropdown-item" href="{{ route('site_contact.index') }}">Contacts</a>
                    @endpermission
                    @permission('read-contractor') 
                        <a class="dropdown-item" href="{{ route('contractor.index') }}">Contractors</a>
                    @endpermission
                    {{--  <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>  --}}
                </div>
            </li>
            @endability

            {{--  services  --}}
            @ability(Auth::user()->roles->first()->name, 'read-category|read-quiz|read-question|read-service', ['validate_all' => true])
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownServices" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Services
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownServices">
                    @permission('read-category')
                    <a class="dropdown-item" href="{{ route('category.index') }}">Categories</a>
                    @endpermission
                    @permission('read-quiz')
                    <a class="dropdown-item" href="{{ route('quiz.index') }}">Quizzes</a>
                    @endpermission
                    @permission('read-question')
                    <a class="dropdown-item" href="{{ route('question.index') }}">Questions</a>
                    @endpermission
                    @permission('read-service')
                    <a class="dropdown-item" href="{{ route('service.index') }}">Services</a>
                    @endpermission
                </div>
            </li>
            @endability

            {{--  cities  --}}
            @permission('read-lead')
            <li class="nav-item">
                <a class="nav-link" href="{{route('lead.index')}}">Leads</a>
            </li>  
            @endpermission

            {{-- plans --}}
            @permission('read-plan')
            <li class="nav-item">
                <a class="nav-link" href="{{route('plan.index')}}">Plans</a>
            </li>  
            @endpermission

            {{-- cards --}}
            @permission('read-card')
            <li class="nav-item">
                <a class="nav-link" href="{{route('card.index')}}">Cards</a>
            </li>  
            @endpermission
    
            {{-- cards --}}
            @permission('read-charge')
            <li class="nav-item">
                <a class="nav-link" href="{{route('charge.index')}}">History</a>
            </li>  
            @endpermission

            {{--  Communications  --}}
            @ability(Auth::user()->roles->first()->name, 'read-phone|read-sip-domain|read-sip-credential-list|read-twilio-workspace|read-twilio-activity|read-twilio-workflow|read-twilio-configuration|read-missed-call', ['validate_all' => true])
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownCommunications" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Communications
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownCommunications">
                    @permission('read-phone')
                    <a class="dropdown-item" href="{{route('phone.index')}}">Phones</a>
                    @endpermission
                    <div class="dropdown-divider"></div>
                    @permission('read-sip-domain')
                    <a class="dropdown-item" href="{{route('sip_domain.index')}}">SIP Domains</a>
                    @endpermission
                    @permission('read-sip-credential-list')
                    <a class="dropdown-item" href="{{route('sip_credential_list.index')}}">SIP Credential Lists</a>
                    @endpermission
                    @permission('read-sip-credential')
                    <a class="dropdown-item" href="{{route('sip_credential.index')}}">SIP Credentials</a>
                    @endpermission
                    <div class="dropdown-divider"></div>
                    @permission('read-twilio-workspace')
                    <a class="dropdown-item" href="{{route('twilio_workspace.index')}}">Twilio Workspaces</a>
                    @endpermission
                    @permission('read-twilio-activity')
                    <a class="dropdown-item" href="{{route('twilio_activity.index')}}">Twilio Activities</a>
                    @endpermission
                    @permission('read-twilio-workflow')
                    <a class="dropdown-item" href="{{route('twilio_workflow.index')}}">Twilio Workflows</a>
                    @endpermission
                    <div class="dropdown-divider"></div>
                    @permission('read-twilio-configuration')
                    <a class="dropdown-item" href="{{route('twilio_configuration.index')}}">Twilio Configurations</a>
                    @endpermission
                     <div class="dropdown-divider"></div>
                    @permission('read-missed-call')
                    <a class="dropdown-item" href="{{route('missed_call.index')}}">Missed Calls</a>
                    @endpermission
                </div> 
            </li> 
            @endability
            
        </ul>
        {{--  right align  --}}
        <ul class="navbar-nav ml-auto">
            @ability('contractor', '')
            <li class="nav-item">
                <a class="nav-link" href="{{route('charge.index')}}"><span class="text-warning"><b>$ {{Auth::user()->contractor->wallet}}</b></span></a>
            </li>
            @endability
            @auth
            @if(session()->get('_WORKER'))
            <li class="nav-item">
                <agent-status-component 
                    worker-sid='{!! session()->get("_WORKER")->sid !!}'
                    workspace-sid="'{!! session()->get('_WORKER')->twilio_workspace->sid !!}'"
                    user-id="{!! Auth::id() !!}">
                </agent-status-component>
            </li>
            @endif
            <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" id="navbarUser" data-toggle="dropdown" role="button" aria-expanded="false">
                    <i class="fas fa-user-circle fa-lg"></i>  {{ Auth::user()->name }} 
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarUser">
                    <a class="dropdown-item" href="{{route('user.profile')}}"><i class="fas fa-user-cog"></i> Minha Conta</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                        Logout
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </div>
            </li>
            @endauth
        </ul>
    </div>
</nav>
<incoming-call-component
    user-id="{{ Auth::id() }}" 
    dst-route="{{ route('lead.create') }}">
</incoming-call-component>