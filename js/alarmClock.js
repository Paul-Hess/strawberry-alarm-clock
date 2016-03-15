var moment = require('moment');
var AlarmClock = function(){
  this.time = moment().format('MMMM Do YYYY, h:mm:ss a');
}

exports.AlarmClock = AlarmClock;
