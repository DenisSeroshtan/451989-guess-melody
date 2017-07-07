var gameArtistView = (function () {
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

var GameArtistView = function (_AbstractView) {
  inherits(GameArtistView, _AbstractView);

  function GameArtistView(question) {
    classCallCheck(this, GameArtistView);

    var _this = possibleConstructorReturn(this, (GameArtistView.__proto__ || Object.getPrototypeOf(GameArtistView)).call(this));

    _this._question = question;
    return _this;
  }

  createClass(GameArtistView, [{
    key: 'createAnswer',
    value: function createAnswer(index, answer) {
      return '<div class="main-answer-wrapper">\n      <input class="main-answer-r" type="radio" id="answer-' + index + '" name="answer" value="' + index + '" />\n      <label class="main-answer" for="answer-1">\n        <img class="main-answer-preview" src="' + answer.image + '">\n        ' + answer.artistName + '\n      </label> \n    </div>';
    }
  }, {
    key: 'onAnswer',
    value: function onAnswer() {}
  }, {
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var screenDom = this.element;
      var answers = Array.prototype.slice.call(screenDom.querySelectorAll('.main-answer-wrapper'), 0);
      var player = screenDom.querySelector('.player-wrapper');

      var artistSong = this._question.data;
      window.initializePlayer(player, artistSong.file, true, true);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = answers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var answer = _step.value;

          answer.addEventListener('click', function (event) {
            event.preventDefault();

            var wrapperElement = event.currentTarget;
            var index = wrapperElement.querySelector('.main-answer-r').value;
            _this2.onAnswer(index);
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'template',
    get: function get$$1() {
      var _this3 = this;

      return '<section class="main main--level main--level-artist">\n      <div class="main-wrap">\n        <div class="main-timer"></div>\n  \n        <h2 class="title main-title">\u041A\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u044D\u0442\u0443 \u043F\u0435\u0441\u043D\u044E?</h2>\n        <div class="player-wrapper"></div>\n        <form class="main-list">\n          ' + Array.prototype.slice.call(this._question.answers, 0).map(function (answer, index) {
        return _this3.createAnswer(index, answer);
      }) + '\n        </form>\n      </div>\n    </section>';
    }
  }]);
  return GameArtistView;
}(AbstractView);

return GameArtistView;

}());

//# sourceMappingURL=game-artist-view.js.map
