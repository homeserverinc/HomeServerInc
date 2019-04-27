<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    @include('layouts.main_header')
    @yield('head')
</head>
<body class="bg-light">
    @yield('body')

    <!-- Start Open Web Analytics Tracker -->
    <script type="text/javascript">
        //<![CDATA[
        var owa_baseUrl = 'https://peersvc.live/';
        var owa_cmds = owa_cmds || [];
        owa_cmds.push(['setDebug', true]);
        owa_cmds.push(['setSiteId', 'c79c0258e4b5b759ccb7c4f3f3c2b738']);
        owa_cmds.push(['trackPageView']);
        owa_cmds.push(['trackClicks']);
        
        (function() {
            var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
            owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
            _owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
            var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
        }());
        //]]>
    </script>
    <!-- End Open Web Analytics Code -->
</body>
</html>