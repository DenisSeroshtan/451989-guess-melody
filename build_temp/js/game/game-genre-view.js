var gameGenreView = (function () {
'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var AbstractView = function () {
  function AbstractView() {
    classCallCheck(this, AbstractView);
  }

  createClass(AbstractView, [{
    key: "render",
    value: function render() {
      return this.createElement(this.template);
    }
  }, {
    key: "bind",
    value: function bind() {}
  }, {
    key: "create",
    value: function create() {
      this._element = this.render();
      this.bind();
    }
  }, {
    key: "createElement",
    value: function createElement(template) {
      var outer = document.createElement("template");
      outer.innerHTML = template;
      return outer.content;
    }
  }, {
    key: "show",
    value: function show() {
      var mainScreen = document.querySelector(".main");
      mainScreen.innerHTML = "";
      mainScreen.appendChild(this.element);
    }
  }, {
    key: "template",
    get: function get$$1() {
      throw new Error("View should be defined");
    }
  }, {
    key: "element",
    get: function get$$1() {
      if (!this._element) {
        this.create();
      }

      return this._element;
    }
  }]);
  return AbstractView;
}();

var GameGenreView = function (_AbstractView) {
  inherits(GameGenreView, _AbstractView);

  function GameGenreView(question) {
    classCallCheck(this, GameGenreView);

    var _this = possibleConstructorReturn(this, (GameGenreView.__proto__ || Object.getPrototypeOf(GameGenreView)).call(this));

    _this._question = question;
    return _this;
  }

  createClass(GameGenreView, [{
    key: 'createSong',
    value: function createSong(index, answer) {
      return '<div class="genre-answer">\n      <div class="player-wrapper"></div>\n        <input type="checkbox" name="answer" value="answer-1" id="a-' + index + '">\n        <label class="genre-answer-check" for="a-' + index + '"></label>\n      </div>';
    }
  }, {
    key: 'onAnswer',
    value: function onAnswer() {}
  }, {
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var screenDom = this.element;

      this.answers = Array.prototype.slice.call(screenDom.querySelectorAll('.genre-answer'), 0);
      this.answerButton = screenDom.querySelector('.genre-answer-send');

      var playerWrappers = Array.prototype.slice.call(screenDom.querySelectorAll('.player-wrapper'), 0);

      playerWrappers.forEach(function (item, i) {
        item.addEventListener('click', function (event) {
          event.preventDefault();

          if (_this2.currentAudio) {
            _this2.currentAudio.pause();
          }

          _this2.currentAudio = Array.prototype.slice.call(item.querySelectorAll('audio'))[0];
        });

        window.initializePlayer(item, Array.prototype.slice.call(_this2._question.answers, 0)[i].file, false, true);
      });

      this.answers.forEach(function (item) {
        var checkbox = item.querySelector('input');

        checkbox.addEventListener('click', function () {
          _this2.answerClickHandler();
        });
      });

      this.answerButton.disabled = true;

      this.answerButton.onclick = function (event) {
        event.preventDefault();

        var answerIndexes = [];
        Array.prototype.slice.call(_this2.answers, 0).forEach(function (item, i, array) {
          if (_this2.answers[i].querySelector('input').checked) {
            answerIndexes.push(i);
          }
        });

        _this2.onAnswer.apply(_this2, answerIndexes);
      };
    }
  }, {
    key: 'answerClickHandler',
    value: function answerClickHandler() {
      this.answerButton.disabled = false;
    }
  }, {
    key: 'template',
    get: function get$$1() {
      var _this3 = this;

      return '<section class="main main--level main--level-genre">\n    <div class="main-wrap">\n      <h2 class="title">' + this._question.data.toLowerCase() + '</h2>\n      <form class="genre">\n        ' + Array.prototype.slice.call(this._question.answers, 0).map(function (answer, index) {
        return _this3.createSong(index, answer);
      }) + '\n        <button class="genre-answer-send" type="submit">\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</button>\n      </form>\n    </div>\n  </section>';
    }
  }]);
  return GameGenreView;
}(AbstractView);

return GameGenreView;

}());

//# sourceMappingURL=game-genre-view.js.map
