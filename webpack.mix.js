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

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/bs4navbar.js', 'public/js')
   .js('resources/js/questions.js', 'public/js')
   .js('resources/js/leadQuestionsForm.js', 'public/js')
   .js('resources/js/multiQuestionsForm.js', 'public/js')
   .js('resources/js/crudQuestions.js', 'public/js')
   .js('resources/js/configs.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
