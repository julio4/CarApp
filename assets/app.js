/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// require jQuery normally
const $ = require('jquery');

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

require('bootstrap');
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.min');
// create global $ and jQuery variables
global.$ = global.jQuery = $;

console.log("app.js entry point loaded");