$(document).ready(function() {
  console.log('Loaded, bro');
  walkingPony();
});

var walkingPony = function() {
  var pony = $('#pony');
  var distance = 1200;
  setInterval(function() {
  	pony.css('left', distance + 'px');
  	if (distance < -300) {
  		distance = 1200;
  	} else {
  		distance -= 5;
  	}
  }, 60);
};

// $(document).ready(function() {
//   console.log('Loaded, bro');
//   walkingPony(60);
// });
//
// var walkingPony = function(interval) {
//   var delay = interval;
//   var pony = $('#pony');
//   var distance = 1200;
//   setInterval(function() {
//   	pony.css('left',distance + 'px');
//   	if (distance < -300) {
//   		distance = 1200;
//   	} else {
//   		distance -= 5;
//   	}
//   }, delay);
// };
