var AlarmClock = require('./../js/AlarmClock.js').AlarmClock;
$(document).ready(function(){
  alarmClock = new AlarmClock();
  $('body').append('<div class="time">h</div>');
  setInterval(function(){
    alarmClock.updateTime();
    $('.time').text(alarmClock.time);
    alarmClock.checkForAlarms();
  } , 1000);

});
