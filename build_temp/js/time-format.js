(function () {
'use strict';

window.formatTime = function (total, passed) {
  var minutesLeft = Math.floor((total - passed) / 60 / 1000);
  var secondsLeft = (total - passed - minutesLeft * 60 * 1000) / 1000;

  return {
    minutes: minutesLeft,
    seconds: secondsLeft
  };
};

}());

//# sourceMappingURL=time-format.js.map
