var moment = require('moment');
var AlarmClock = function(){
  this.time;
  this.alarms = [];
}

AlarmClock.prototype.updateTime = function() {
      this.time = moment().format('MMMM Do YYYY, h:mm:ss a');
      // return this.time;
}

AlarmClock.prototype.setAlarm = function(hour, minute) {
  var alarm = moment().set({'hour': hour, 'minute': minute, 'second': 0}).format('MMMM Do YYYY, h:mm:ss a');
  this.alarms.push(alarm);
}

AlarmClock.prototype.checkForAlarms = function() {
  var self = this;
  for (var i = 0; i < this.alarms.length; i++) {
    if (this.time === this.alarms[i]) {
      $('body').append('<div class="cats"></div>');
      $('.cats').append('<img class="alarm-image" src="http://lorempixel.com/400/400/cats/">')
      .append('<audio controls autoplay class="alarm-sound">' +
                '<source src="./../assets/audio/meow.wav" type="audio/wav" alt="kitten meow">' +
                 'Your browser does not support the audio element.' +
                 '</audio>')
      .append('<button class="shut-off">Shut Off</button>')
      .append('<button class="snooze">snooze</button>');
      this.alarms.splice(i, 1);
      $('.shut-off').click(function() {
      console.log('meow');
      $('div').remove('.cats');
      });
      $('.snooze').click(function() {
        self.snoozeAlarm();
        $('div').remove('.cats');
      });
    }
  }
}

AlarmClock.prototype.snoozeAlarm = function(){
  this.setAlarm(moment().hour(), moment().add(1, 'm').minute());
}

exports.AlarmClock = AlarmClock;
