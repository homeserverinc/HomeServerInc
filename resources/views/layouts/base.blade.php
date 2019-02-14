<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    @include('layouts.main_header')
    @yield('head')
</head>
<body class="bg-light">
    @yield('body')
</body>
</html>