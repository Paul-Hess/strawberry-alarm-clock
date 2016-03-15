var moment = require('moment');
var AlarmClock = function(){
  this.time;
}

AlarmClock.prototype.updateTime = function() {
      this.time = moment().format('MMMM Do YYYY, h:mm:ss a');
      // return this.time;
}

exports.AlarmClock = AlarmClock;
