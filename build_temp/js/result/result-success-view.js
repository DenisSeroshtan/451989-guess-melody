var resultSuccessView = (function () {
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

var gameInfo = Object.freeze({
  'gameName': '\u0423\u0433\u0430\u0434\u0430\u0439 \u041C\u0435\u043B\u043E\u0434\u0438\u044E',
  'rules': '\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u0440\u043E\u0441\u0442\u044B&nbsp;\u2014 \u0437\u0430&nbsp;' + Math.round(model.initState.time / 60) + ' \u043C\u0438\u043D\u0443\u0442\u044B \u0434\u0430\u0442\u044C\n  \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432.<br>\n  \u0423\u0434\u0430\u0447\u0438!'
});

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

return ResultFailView;

}());

//# sourceMappingURL=result-success-view.js.map
