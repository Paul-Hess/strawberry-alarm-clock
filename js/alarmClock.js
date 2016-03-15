var moment = require('moment');
var AlarmClock = function(){
  this.time;
  this.alarms = [];
}

AlarmClock.prototype.updateTime = function() {
      this.time = moment().format('MMMM Do YYYY, h:mm:ss a');
      // return this.time;
}

AlarmClock.prototype.setAlarm = function(hour, minute, seconds) {
  var alarm = moment().set({'hour': hour, 'minute': minute, 'second': 0}).format('MMMM Do YYYY, h:mm:ss a');
  this.alarms.push(alarm);
}

AlarmClock.prototype.checkForAlarms = function() {
  for (var i = 0; i < this.alarms.length; i++) {
    if (this.time === this.alarms[i]) {
      console.log('foo');
    }
  }
}

exports.AlarmClock = AlarmClock;
