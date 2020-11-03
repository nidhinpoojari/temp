const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



// mix.styles(['resources/assets/css/components.css',
// 'resources/assets/css/style.css','resources/assets/css/themes/default.css'
//     ],'public/css/app.css');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');



//   <script src="{{URL::asset('js/app.js')}}" defer></script>
//     <script src="{{URL::asset('assets/js/jquery-1.11.0.min.js')}}" type="text/javascript"></script>
//     <script src="{{URL::asset('assets/plugins/bootstrap/js/bootstrap.min.js')}}" type="text/javascript"></script>
//     <link href="{{URL::asset('assets/css/components.css')}}" type="text/css" />
//     <link href="{{URL::asset('assets/css/style.css')}}"  type="text/css" />
//     <link href="{{URL::asset('assets/css/themes/default.css')}}"  type="text/css" id="style_color" />
