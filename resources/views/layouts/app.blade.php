<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    @include('layouts.head')

</head>
<body class="hold-transition skin-blue sidebar-mini">

@include('layouts.header')

@include('layouts.sidebar')

    <div id="app">
            @yield('content')
    </div>

    @include('layouts.footer')
</body>
</html>
