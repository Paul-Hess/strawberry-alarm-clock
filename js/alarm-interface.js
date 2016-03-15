var AlarmClock = require('./../js/AlarmClock.js').AlarmClock;
$(document).ready(function(){
  alarmClock = new AlarmClock();
  $('body').append('<div class="time"></div>');
  $('#alarm').click(function(){
    alarmClock.setAlarm($('#hour').val(), $('#minute').val());
  });
  update();
});


function update(){
  setInterval(function(){
    alarmClock.updateTime();
    console.log(alarmClock.checkForAlarms());
    if(alarmClock.checkForAlarms()){
      playAlarm();
    }
    $('.time').text(alarmClock.time);
  } , 1000);
}


function playAlarm(){
  $('body').append('<div class="cats"></div>');
  $('.cats').append('<img class="alarm-image" src="http://lorempixel.com/400/400/cats/">')
  .append('<audio controls autoplay class="alarm-sound">' +
            '<source src="./../assets/audio/meow.wav" type="audio/wav" alt="kitten meow">' +
             'Your browser does not support the audio element.' +
             '</audio>')
  .append('<button class="shut-off">Shut Off</button>')
  .append('<button class="snooze">snooze</button>');
  $('.shut-off').click(function() {
  $('div').remove('.cats');
  });
  $('.snooze').click(function() {
    alarmClock.snoozeAlarm();
    $('div').remove('.cats');
  });
}
