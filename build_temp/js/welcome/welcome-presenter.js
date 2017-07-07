var welcomePresenter = (function () {
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





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

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

function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

var BaseAdapter = function () {
  function BaseAdapter() {
    classCallCheck(this, BaseAdapter);

    if (new.target === BaseAdapter) {
      throw new Error();
    }
  }

  createClass(BaseAdapter, [{
    key: 'preprocess',
    value: function preprocess(data) {
      return data;
    }
  }, {
    key: 'toServer',
    value: function toServer(data) {
      return data;
    }
  }]);
  return BaseAdapter;
}();

var defaultAdapter = new (function (_BaseAdapter) {
  inherits(_class, _BaseAdapter);

  function _class() {
    classCallCheck(this, _class);
    return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  return _class;
}(BaseAdapter))();

var BaseModel = function () {
  function BaseModel() {
    classCallCheck(this, BaseModel);
  }

  createClass(BaseModel, [{
    key: 'load',
    value: function load() {
      var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAdapter;

      return fetch(this.urlRead).then(function (resp) {
        return resp.json();
      }).then(adapter.preprocess);
    }
  }, {
    key: 'send',
    value: function send(data) {
      var adapter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAdapter;

      var requestSettings = {
        body: adapter.toServer(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      };

      return fetch(this.urlWrite, requestSettings).then(this.onUpload);
    }
  }, {
    key: 'urlRead',
    get: function get$$1() {
      throw new Error('Abstract method. Define the URL for model.');
    }
  }, {
    key: 'urlWrite',
    get: function get$$1() {
      throw new Error('Abstract method. Define the URL for model.');
    }
  }]);
  return BaseModel;
}();

var gameModelAdapter = new (function (_BaseAdapter) {
  inherits(_class, _BaseAdapter);

  function _class() {
    classCallCheck(this, _class);
    return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));
  }

  createClass(_class, [{
    key: 'preprocess',
    value: function preprocess(data) {
      return data.map(function (item) {
        switch (item.type) {
          case 'artist':
            return { type: 1, data: { file: item.src }, answers: gameModelAdapter.proceedArtistAnswers(item.answers) };
          case 'genre':
            return { type: 2, data: item.question, answers: gameModelAdapter.proceedGenreAnswers(item.answers, item.genre) };
        }

        return {};
      });
    }
  }, {
    key: 'toServer',
    value: function toServer(data) {
      return JSON.stringify(data);
    }
  }, {
    key: 'proceedArtistAnswers',
    value: function proceedArtistAnswers(answers) {
      return answers.map(function (item) {
        return { valid: item.isCorrect, artistName: item.title, image: item.image.url };
      });
    }
  }, {
    key: 'proceedGenreAnswers',
    value: function proceedGenreAnswers(answers, correctGenre) {
      return answers.map(function (item) {
        return { valid: item.genre === correctGenre ? true : false, file: item.src };
      });
    }
  }]);
  return _class;
}(BaseAdapter))();

var GameModel = function (_BaseModel) {
  inherits(GameModel, _BaseModel);
  createClass(GameModel, [{
    key: 'urlRead',
    get: function get$$1() {
      return 'https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions';
    }
  }, {
    key: 'correctAnswers',
    get: function get$$1() {
      return this.state.questions.reduce(function (sum, question) {
        return sum + (question.isUserAnswerCorrect ? 1 : 0);
      }, 0);
    }
  }, {
    key: 'gameTime',
    get: function get$$1() {
      return this.initState.time - this.state.time;
    }
  }, {
    key: 'timeLeft',
    set: function set$$1(value) {
      this.state.time = value;

      if (!this.state.time) {
        this.onFinishGame();
      }
    },
    get: function get$$1() {
      return this.state.time;
    }
  }, {
    key: 'lifes',
    get: function get$$1() {
      return this.state.life;
    }
  }, {
    key: 'currentQuestion',
    get: function get$$1() {
      return this.state.questions[this.state.currentIndex];
    }
  }, {
    key: 'stats',
    get: function get$$1() {
      var stats = {};
      stats.answers = this.correctAnswers;
      stats.time = this.gameTime;

      return stats;
    }
  }, {
    key: 'isFail',
    get: function get$$1() {
      return !this.timeLeft || !this.lifes;
    }
  }]);

  function GameModel() {
    classCallCheck(this, GameModel);

    var _this2 = possibleConstructorReturn(this, (GameModel.__proto__ || Object.getPrototypeOf(GameModel)).call(this));

    _this2.QuestionType = {
      ARTIST: 1,
      GENRE: 2
    };

    _this2.questions = [];
    _this2.initState = Object.freeze({
      'time': 120,
      'life': 3,
      'currentIndex': 0,
      'questions': deepCopy(_this2.questions)
    });
    _this2.state = Object.assign({}, _this2.initState);
    return _this2;
  }

  createClass(GameModel, [{
    key: 'resetGame',
    value: function resetGame() {
      this.state = Object.assign({}, this.initState, { questions: deepCopy(this.questions) });
    }
  }, {
    key: 'answer',
    value: function answer() {
      for (var _len = arguments.length, selectedIndexes = Array(_len), _key = 0; _key < _len; _key++) {
        selectedIndexes[_key] = arguments[_key];
      }

      this.proceedCurrentAnswer(selectedIndexes);

      if (this.currentQuestion.isUserAnswerCorrect) {
        this.nextQuestion();
      } else {
        this.state.life = Math.max(0, this.state.life - 1);

        if (this.state.life < 1) {
          this.onFinishGame();
        } else {
          this.nextQuestion();
        }
      }
    }
  }, {
    key: 'nextQuestion',
    value: function nextQuestion() {
      this.state.currentIndex++;

      if (this.state.currentIndex >= this.state.questions.length) {
        this.onFinishGame();
      } else {
        this.onNextQuestion();
      }
    }
  }, {
    key: 'proceedCurrentAnswer',
    value: function proceedCurrentAnswer(answerIndexes) {
      var answers = this.currentQuestion.answers;
      answerIndexes.forEach(function (item) {
        answers[item].isUserAnswer = true;
      });

      var correct = answers.findIndex(function (item, i) {
        return item.valid && !item.isUserAnswer || !item.valid && item.isUserAnswer;
      }) < 0;
      this.currentQuestion.isUserAnswerCorrect = correct;
      return correct;
    }
  }, {
    key: 'onFinishGame',
    value: function onFinishGame() {}
  }, {
    key: 'onNextQuestion',
    value: function onNextQuestion() {}
  }, {
    key: 'load',
    value: function load() {
      return get(GameModel.prototype.__proto__ || Object.getPrototypeOf(GameModel.prototype), 'load', this).call(this, gameModelAdapter);
    }
  }]);
  return GameModel;
}(BaseModel);

var model = new GameModel();

var USERNAME = '451989';
var SERVER_URL = 'https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/' + USERNAME;

var gameInfo = Object.freeze({
  'gameName': '\u0423\u0433\u0430\u0434\u0430\u0439 \u041C\u0435\u043B\u043E\u0434\u0438\u044E',
  'rules': '\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u0440\u043E\u0441\u0442\u044B&nbsp;\u2014 \u0437\u0430&nbsp;' + Math.round(model.initState.time / 60) + ' \u043C\u0438\u043D\u0443\u0442\u044B \u0434\u0430\u0442\u044C\n  \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432.<br>\n  \u0423\u0434\u0430\u0447\u0438!'
});

var WelcomeView = function (_AbstractView) {
  inherits(WelcomeView, _AbstractView);

  function WelcomeView() {
    classCallCheck(this, WelcomeView);
    return possibleConstructorReturn(this, (WelcomeView.__proto__ || Object.getPrototypeOf(WelcomeView)).apply(this, arguments));
  }

  createClass(WelcomeView, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var button = this.element.querySelector('.main-play');
      button.onclick = function () {
        _this2.onStartClick();
      };
    }
  }, {
    key: 'onStartClick',
    value: function onStartClick() {}
  }, {
    key: 'template',
    get: function get$$1() {
      return '<section class="main main--welcome">\n      <section class="logo" title="' + gameInfo.gameName + '"><h1>' + gameInfo.gameName + '</h1></section>\n      <button class="main-play">\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443</button>\n      <h2 class="title main-title">\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B</h2>\n      <p class="text main-text">\n        ' + gameInfo.rules + '      \n      </p>\n    </section>';
    }
  }]);
  return WelcomeView;
}(AbstractView);

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

var GamePresenter = function () {
  function GamePresenter(model$$1) {
    classCallCheck(this, GamePresenter);

    this._model = model$$1;
  }

  createClass(GamePresenter, [{
    key: 'init',
    value: function init() {
      var _this = this;

      switch (this._model.currentQuestion.type) {
        case this._model.QuestionType.ARTIST:
          this.view = new GameArtistView(this._model.currentQuestion);
          break;
        case this._model.QuestionType.GENRE:
          this.view = new GameGenreView(this._model.currentQuestion);
          break;
      }

      this.view.create();
      this.view.show();
      this.view.onAnswer = function () {
        var _model;

        return (_model = _this._model).answer.apply(_model, arguments);
      };

      this._model.onNextQuestion = function () {
        application.showGame();
      };

      this._model.onFinishGame = function () {
        if (_this._model.isFail) {
          location.hash = application.ControllerId.RESULT;
        } else {
          location.hash = application.ControllerId.RESULT + '=' + JSON.stringify(_this._model._stats);
        }

        _this.destroy();
      };

      if (this._model.state.currentIndex === 0) {
        application.initTimerView(this._model.timeLeft);

        this.timer = setInterval(function () {
          return _this.updateTimer();
        }, 1000);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      clearInterval(this.timer);
      this._model.resetGame();
    }
  }, {
    key: 'updateTimer',
    value: function updateTimer() {
      this._model.timeLeft--;
    }
  }]);
  return GamePresenter;
}();

var game = new GamePresenter(model);

var ResultFailView = function (_AbstractView) {
  inherits(ResultFailView, _AbstractView);

  function ResultFailView(stats) {
    classCallCheck(this, ResultFailView);

    var _this = possibleConstructorReturn(this, (ResultFailView.__proto__ || Object.getPrototypeOf(ResultFailView)).call(this));

    _this._stats = stats;
    return _this;
  }

  createClass(ResultFailView, [{
    key: 'onRestartClick',
    value: function onRestartClick() {}
  }, {
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var screenDom = this.element;

      var button = screenDom.querySelector('.main-replay');
      button.onclick = function () {
        _this2.onRestartClick();
      };

      return screenDom;
    }
  }, {
    key: 'getTimeString',
    value: function getTimeString() {
      var time = this._stats.time;

      var mins = Math.floor(time / 60);
      var secs = time - mins * 60;

      if (mins) {
        return mins + ' \u043C\u0438\u043D\u0443\u0442\u044B ' + secs + ' \u0441\u0435\u043A\u0443\u043D\u0434\u044B';
      } else {
        return secs + ' \u0441\u0435\u043A\u0443\u043D\u0434\u044B';
      }
    }
  }, {
    key: 'template',
    get: function get$$1() {
      return '<section class="main main--result">\n        <section class="logo" title="' + gameInfo.gameName + '"><h1>' + gameInfo.gameName + '</h1></section>\n        <h2 class="title">\u0412\u044B \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043C\u0435\u043B\u043E\u043C\u0430\u043D!</h2>\n        <div class="main-stat">\u0417\u0430&nbsp;' + this.getTimeString() + '<br>\u0432\u044B&nbsp;\u043E\u0442\u0433\u0430\u0434\u0430\u043B\u0438 ' + this._stats.answers + '&nbsp;\u043C\u0435\u043B\u043E\u0434\u0438\u0438</div>\n        <span class="main-comparison">\u042D\u0442\u043E&nbsp;\u043B\u0443\u0447\u0448\u0435 \u0447\u0435\u043C \u0443&nbsp;' + this._stats.percentHighscore + '&nbsp;\u0438\u0433\u0440\u043E\u043A\u043E\u0432</span>\n        <span role="button" tabindex="0" class="main-replay">\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437</span>\n      </section>';
    }
  }]);
  return ResultFailView;
}(AbstractView);

var ResultFailView$1 = function (_AbstractView) {
  inherits(ResultFailView, _AbstractView);

  function ResultFailView() {
    classCallCheck(this, ResultFailView);
    return possibleConstructorReturn(this, (ResultFailView.__proto__ || Object.getPrototypeOf(ResultFailView)).apply(this, arguments));
  }

  createClass(ResultFailView, [{
    key: 'onRestartClick',
    value: function onRestartClick() {}
  }, {
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var screenDom = this.element;

      var button = screenDom.querySelector('.main-replay');
      button.onclick = function () {
        _this2.onRestartClick();
      };

      return screenDom;
    }
  }, {
    key: 'template',
    get: function get$$1() {
      return '<section class="main main--result">\n      <section class="logo" title="' + gameInfo.gameName + '"><h1>' + gameInfo.gameName + '</h1></section>\n        <h2 class="title">\u0412\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438</h2>\n        <div class="main-stat">\u041D\u0438\u0447\u0435\u0433\u043E, \u0432\u0430\u043C \u043F\u043E\u0432\u0435\u0437\u0435\u0442 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0437</div>\n        <span role="button" tabindex="0" class="main-replay">\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437</span>\n      </section>';
    }
  }]);
  return ResultFailView;
}(AbstractView);

var resultAdapter = new (function (_BaseAdapter) {
  inherits(_class, _BaseAdapter);

  function _class() {
    classCallCheck(this, _class);
    return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  createClass(_class, [{
    key: 'preprocess',
    value: function preprocess(data) {
      if (!data) {
        return [];
      }

      data.forEach(function (item, index) {
        if (!item.hasOwnProperty('answers') || !item.hasOwnProperty('time')) {
          data.splice(index, 1);
        }
      });
      return data;
    }
  }, {
    key: 'toServer',
    value: function toServer(data) {
      return JSON.stringify(data);
    }
  }]);
  return _class;
}(BaseAdapter))();

var ResultModel = function (_BaseModel) {
  inherits(ResultModel, _BaseModel);

  function ResultModel() {
    classCallCheck(this, ResultModel);

    var _this2 = possibleConstructorReturn(this, (ResultModel.__proto__ || Object.getPrototypeOf(ResultModel)).call(this));

    _this2._stats = [];
    return _this2;
  }

  createClass(ResultModel, [{
    key: 'send',
    value: function send(data) {
      get(ResultModel.prototype.__proto__ || Object.getPrototypeOf(ResultModel.prototype), 'send', this).call(this, data, resultAdapter);
    }
  }, {
    key: 'load',
    value: function load() {
      return get(ResultModel.prototype.__proto__ || Object.getPrototypeOf(ResultModel.prototype), 'load', this).call(this, resultAdapter);
    }
  }, {
    key: 'urlRead',
    get: function get$$1() {
      return SERVER_URL;
    }
  }, {
    key: 'urlWrite',
    get: function get$$1() {
      return SERVER_URL;
    }
  }]);
  return ResultModel;
}(BaseModel);

var resultModel = new ResultModel();

var ResultPresenter = function () {
  function ResultPresenter() {
    classCallCheck(this, ResultPresenter);
  }

  createClass(ResultPresenter, [{
    key: 'init',
    value: function init(userStat) {
      if (userStat) {
        resultModel.send(userStat);
        this.view = new ResultFailView(Object.assign({}, userStat, { percentHighscore: this.getPercentHighscore(userStat) }));
      } else {
        this.view = new ResultFailView$1();
      }

      this.view.create();
      this.view.show();

      this.view.onRestartClick = function () {
        location.hash = application.ControllerId.WELCOME;
      };

      application.destroyTimerView();
    }
  }, {
    key: 'getPercentHighscore',
    value: function getPercentHighscore(userStat) {
      userStat.isPlayerResult = true;

      var serverStats = resultModel._stats;
      serverStats.push(userStat);

      serverStats.sort(function (a, b) {
        return b.answers - a.answers || a.time - b.time;
      });

      var playerIndex = serverStats.findIndex(function (item) {
        if (item.isPlayerResult) {
          item.isPlayerResult = false;
          return true;
        }

        return false;
      });

      var result = 100 - playerIndex / serverStats.length * 100;
      return Math.floor(result) + '%';
    }
  }]);
  return ResultPresenter;
}();

var result = new ResultPresenter();

var screenTemplate = function screenTemplate() {
  return "\n  <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"timer\" viewBox=\"0 0 780 780\">\n    <circle\n    cx=\"390\" cy=\"390\" r=\"370\"\n    class=\"timer-line\"\n    style=\"filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center\"></circle>\n  \n    <div class=\"timer-value\" xmlns=\"http://www.w3.org/1999/xhtml\">\n    <span class=\"timer-value-mins\"></span><!--\n      --><span class=\"timer-value-dots\">:</span><!--\n    --><span class=\"timer-value-secs\"></span>\n    </div>\n  </svg>";
};

function getElement() {
  var outer = document.createElement("template");
  outer.innerHTML = screenTemplate();
  return outer.content;
}

var Application = function () {
  function Application() {
    var _this = this;

    classCallCheck(this, Application);

    this.ControllerId = {
      WELCOME: '',
      GAME: 'game',
      RESULT: 'result'
    };

    window.onhashchange = function () {
      _this.initLocation();
    };

    var preloaderRemove = this.showWelcome;

    model.load().then(function (data) {
      return _this.setup(data);
    }).then(function () {
      return resultModel.load();
    }).catch(function () {
      return [];
    }).then(function (stats) {
      resultModel._stats = stats;
    }).then(function () {
      return new Promise(function (resolve, reject) {
        // utils.preloadAudio(model.questions, resolve, reject);
        resolve();
      });
    }).then(function () {
      preloaderRemove();
      _this.initLocation();
    }).catch(window.console.error);
  }

  createClass(Application, [{
    key: 'setup',
    value: function setup(questions) {
      var _routes;

      model.questions = questions;

      this._routes = (_routes = {}, defineProperty(_routes, this.ControllerId.WELCOME, welcome), defineProperty(_routes, this.ControllerId.GAME, game), defineProperty(_routes, this.ControllerId.RESULT, result), _routes);
    }
  }, {
    key: 'init',
    value: function init() {}
  }, {
    key: 'initTimerView',
    value: function initTimerView(time) {
      var appDiv = document.querySelector('.timer');
      appDiv.appendChild(getElement());

      this.timerStopFunction = window.initializeCountdown(time);
    }
  }, {
    key: 'destroyTimerView',
    value: function destroyTimerView() {
      var appDiv = document.querySelector('.timer');
      appDiv.innerHTML = '';

      if (this.timerStopFunction) {
        this.timerStopFunction();
      }
    }
  }, {
    key: 'showWelcome',
    value: function showWelcome() {
      welcome.init();
    }
  }, {
    key: 'showGame',
    value: function showGame() {
      game.init();
    }
  }, {
    key: 'initLocation',
    value: function initLocation() {
      var params = this.getJSONHashString(location.hash);

      this.changeController(this.getRawHashString(location.hash), params);
    }
  }, {
    key: 'getRawHashString',
    value: function getRawHashString(hash) {
      var returnString = hash.replace('#', '');

      var index = hash.indexOf('=');
      if (index > 0) {
        returnString = returnString.substr(0, index - 1);
      }

      return returnString;
    }
  }, {
    key: 'getJSONHashString',
    value: function getJSONHashString(hash) {
      var returnString = hash.replace('#', '');
      var index = hash.indexOf('=');

      if (index > 0) {
        returnString = returnString.substr(index);
      }

      try {
        return JSON.parse(returnString);
      } catch (error) {
        return null;
      }
    }
  }, {
    key: 'changeController',
    value: function changeController() {
      var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var params = arguments[1];

      var controller = this._routes[route];
      game.destroy();

      if (controller) {
        controller.init(params);
      } else {
        this.showWelcome();
      }
    }
  }]);
  return Application;
}();

var application = new Application();

var WelcomePresenter = function () {
  function WelcomePresenter() {
    classCallCheck(this, WelcomePresenter);

    this.view = new WelcomeView();
  }

  createClass(WelcomePresenter, [{
    key: 'init',
    value: function init() {
      this.view.create();
      this.view.show();
      this.view.onStartClick = function () {
        location.hash = application.ControllerId.GAME;
      };

      application.destroyTimerView();
    }
  }]);
  return WelcomePresenter;
}();

var welcome = new WelcomePresenter();

return welcome;

}());

//# sourceMappingURL=welcome-presenter.js.map
