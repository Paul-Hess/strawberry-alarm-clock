var AlarmClock = require('./../js/AlarmClock.js').AlarmClock;
$(document).ready(function(){
  alarmClock = new AlarmClock();
  $('body').append('<div class="time"></div>');
  $('#alarm').click(function(){
    alarmClock.setAlarm($('#hour').val(), $('#minute').val());
  });
  setInterval(function(){
    alarmClock.updateTime();
    alarmClock.checkForAlarms();
    $('.time').text(alarmClock.time);
  } , 1000);
  $('.snooze').click(function() {
    alarmClock.snoozeAlarm();
    $('div').remove('.cats');
  });


});
