var expect = require('chai').expect;
var AlarmClock = require('./../js/AlarmClock.js').AlarmClock;
var moment = require('moment');

describe('AlarmClock', function(){
  it('should display the current time', function(){
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    var alarmClock = new AlarmClock();
    expect(alarmClock.time).to.equal(date);
  })
})
