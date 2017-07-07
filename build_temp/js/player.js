(function () {
'use strict';

var updateState = function updateState(element, player) {
  element.querySelector(".player-status").style.width = parseInt(player.currentTime * 100 / player.duration, 10) + "%";
};

var syncState = function syncState(player, element) {
  element.classList.toggle("player--is-playing", !player.paused);
};

var switchState = function switchState(state, player, element) {
  if (player.paused) {
    player.play();
    state.stopAnimation = window.animation.animate(window.animation.getAnimation(player.currentTime, 1000, player.duration), function (animation) {
      return updateState(element, player);
    });
  } else {
    player.pause();
    state.stopAnimation();
    state.stopAnimation = null;
  }

  syncState(player, element);
};

var destroyPlayer = function destroyPlayer(element, state) {
  var player = element.querySelector("audio");
  var button = element.querySelector("button");

  if (state.stopAnimation) {
    state.stopAnimation();
  }

  player.src = null;
  button.onclick = null;
  element.innerHTML = "";
  state = null;

  return true;
};

window.initializePlayer = function (element, file) {
  var autoplay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var controllable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var state = {};

  var content = document.querySelector("template").content.querySelector(".player").cloneNode(true);
  var player = content.querySelector("audio");
  var button = content.querySelector("button");

  player.onloadeddata = function () {
    if (controllable) {
      button.onclick = function () {
        return switchState(state, player, content);
      };
    }

    if (autoplay) {
      switchState(state, player, content);
    }
  };

  player.src = file;
  element.appendChild(content);
  element.classList.toggle("player--no-controls", !controllable);

  return function () {
    return destroyPlayer(element, state);
  };
};

}());

//# sourceMappingURL=player.js.map
