// require jQuery normally
const $ = require('jquery');

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
require('bootstrap');

// create global $ and jQuery variables
global.$ = global.jQuery = $;

var picker = new Litepicker({ element: document.getElementById('litepicker'),
    firstDay:1,
    format:'D MMM, YYYY',
    lang:'fr-FR',
    numberOfMonths:1,
    numberOfColumns:1,
    minDate:Date.now(),
    maxDate:null,
    minDays:1,
    maxDays:null,
    selectForward:true,
    selectBackward:false,
    splitView:false,
    inlineMode:false,
    singleMode:false,
    autoApply:true,
    showWeekNumbers:false,
    showTooltip:true,
    disableWeekends:false,
    mobileFriendly:true,
    moduleRanges: true
});

console.log("dates.js entry point loaded");