// // require jQuery normally
 const $ = require('jquery');
//
// // create global $ and jQuery variables
global.$ = global.jQuery = $;
import('./lib/datepicker.css');
import Litepicker from './lib/date-picker.js';
import './lib/date-range.js';
console.log("date.js entry point loaded");

global.picker = new Litepicker({ element: document.getElementsByClassName('picker')[0],
  firstDay:1,
  format:'D MMMM YYYY',
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
  singleMode:true,
  autoApply:true,
  showWeekNumbers:false,
  showTooltip:true,
  disableWeekends:false,
  mobileFriendly:true,
  moduleRanges: true
 });

