(function () {
'use strict';

window.animation = {
  getAnimation: function getAnimation(step, stepDuration, steps) {
    return {
      step: step, stepDuration: stepDuration, steps: steps
    };
  },

  animate: function animate(animation, callback, callbackEnd) {
    var interval = setInterval(function () {
      var nextStep = animation.step + 1;
      if (nextStep <= animation.steps) {
        animation = window.animation.getAnimation(nextStep, animation.stepDuration, animation.steps);
        callback(animation);
      } else {
        stopFn();
        if (typeof callbackEnd === "function") {
          callbackEnd();
        }
      }
    }, animation.stepDuration);

    var stopFn = function stopFn() {
      return clearInterval(interval);
    };

    return stopFn;
  }
};

}());

//# sourceMappingURL=animate.js.map
