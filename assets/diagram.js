
// any CSS you import will output into a single css file (app.css in this case)
console.log("diagram.js entry point loaded");
require("chart.js");
import Chart from 'chart.js';
require('./lib/utils.js');
Chart.defaults.global.legend.display = false;