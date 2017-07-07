var timerView = (function () {
'use strict';

var screenTemplate = function screenTemplate() {
  return "\n  <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"timer\" viewBox=\"0 0 780 780\">\n    <circle\n    cx=\"390\" cy=\"390\" r=\"370\"\n    class=\"timer-line\"\n    style=\"filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center\"></circle>\n  \n    <div class=\"timer-value\" xmlns=\"http://www.w3.org/1999/xhtml\">\n    <span class=\"timer-value-mins\"></span><!--\n      --><span class=\"timer-value-dots\">:</span><!--\n    --><span class=\"timer-value-secs\"></span>\n    </div>\n  </svg>";
};

function getElement() {
  var outer = document.createElement("template");
  outer.innerHTML = screenTemplate();
  return outer.content;
}

return getElement;

}());

//# sourceMappingURL=timer-view.js.map
