(function () {
'use strict';

// Окружность уменьшается за счет штриховки. Фактически, обводка состоит
// из одного длинного штриха, а пропуск за счет расстояния до следующего
// штриха. Задача правильной заливки состоит в том, чтобы правильно
// задать расстояние до следующего штриха.
//
// Из радиуса можно рассчитать длину окружности. При известной длине окружности,
// количестве шагов и номере текущего шага в анимации можно понять, на сколько
// нужно уменьшать длину окружности на текущем шаге. Для этого надо вычесть
// из нее длину одного шага умноженную на номер текущего шага.
//
// Длина окружности = 2πR
// Длина шага = Длина окружности / Количество шагов
// Пропуск = Длина шага * Номер шага
var redrawCircle = function redrawCircle(circle, radius, animation) {
  var length = 2 * Math.PI * radius;
  var stepLength = length / animation.steps;
  var lengthToClear = stepLength * animation.step;

  circle.setAttributeNS(null, "stroke-dasharray", length.toString());
  circle.setAttributeNS(null, "stroke-dashoffset", lengthToClear.toString());

  return circle;
};

var addLeadingZero = function addLeadingZero(val) {
  return val < 10 ? "0" + val : val;
};

var redrawTimer = function redrawTimer(timer, animation) {
  var total = animation.stepDuration * animation.steps;
  var passed = animation.stepDuration * animation.step;
  var timeLeft = window.formatTime(total, passed);

  timer.querySelector(".timer-value-mins").textContent = addLeadingZero(timeLeft.minutes);
  timer.querySelector(".timer-value-secs").textContent = addLeadingZero(timeLeft.seconds);

  return timer;
};

window.initializeCountdown = function (time) {
  var element = document.querySelector(".timer-line");
  var radius = parseInt(element.getAttributeNS(null, "r"), 10);
  var timer = document.querySelector(".timer-value");

  return window.animation.animate(window.animation.getAnimation(0, 1000, time), function (animation) {
    redrawCircle(element, radius, animation);
    redrawTimer(timer, animation);
  }, function () {
    return timer.classList.add("timer-value--finished");
  });
};

}());

//# sourceMappingURL=timer.js.map
