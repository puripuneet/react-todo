var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00 am -> 09
// January 1st 1970 @ 12:01 am -> 60
// December 31st 1969 @ 11:59 pm -> -60

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1495287759;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
