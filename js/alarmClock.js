var moment = require('moment');
var AlarmClock = function(){
  this.time;
  this.alarms = [];
}

AlarmClock.prototype.updateTime = function() {
      this.time = moment().format('MMMM Do YYYY, h:mm:ss a');
}

AlarmClock.prototype.setAlarm = function(hour, minute) {
  var alarm = moment().set({'hour': hour, 'minute': minute, 'second': 0}).format('MMMM Do YYYY, h:mm:ss a');
  this.alarms.push(alarm);
}

AlarmClock.prototype.checkForAlarms = function() {
  for (var i = 0; i < this.alarms.length; i++) {
    if (this.time === this.alarms[i]) {
      this.alarms.splice(i, 1);
      return true;
    }
  }
  return false;
}

AlarmClock.prototype.snoozeAlarm = function(){
  this.setAlarm(moment().hour(), moment().add(1, 'm').minute());
}

exports.AlarmClock = AlarmClock;
