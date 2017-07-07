var gameModel = (function () {
'use strict';

function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

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

return model;

}());

//# sourceMappingURL=game-model.js.map
