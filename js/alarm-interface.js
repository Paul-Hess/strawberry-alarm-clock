var AlarmClock = require('./../js/AlarmClock.js').AlarmClock;
$(document).ready(function(){
  alarmClock = new AlarmClock();
  $('body').append('<div class="time"></div>');
  $('.time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
})
