import welcome from './welcome/welcome-presenter.js';
import game from './game/game-presenter.js';
import result from './result/result-presenter.js';
import model from './game/game-model.js';
import resultModel from './result/result-model.js';
import timer from './timer-view.js';
import * as utils from './utils.js';

class Application {
  constructor() {
    this.ControllerId = {
      WELCOME: ``,
      GAME: `game`,
      RESULT: `result`
    };

    window.onhashchange = () => {
      this.initLocation();
    };

    const preloaderRemove = this.showWelcome;

    model.load()
      .then((data) => this.setup(data))
      .then(() => {
        return resultModel.load();
      }).catch(() => {
        return [];
      })
      .then((stats) => {
        resultModel._stats = stats;
      }).then(() => {
        return new Promise((resolve, reject) => {
          // utils.preloadAudio(model.questions, resolve, reject);
          resolve();
        });
      }).then(() => {
        preloaderRemove();
        this.initLocation();
      })
      .catch(window.console.error);
  }

  setup(questions) {
    model.questions = questions;

    this._routes = {
      [this.ControllerId.WELCOME]: welcome,
      [this.ControllerId.GAME]: game,
      [this.ControllerId.RESULT]: result
    };
  }

  init() {

  }

  initTimerView(time) {
    const appDiv = document.querySelector(`.timer`);
    appDiv.appendChild(timer());

    this.timerStopFunction = window.initializeCountdown(time);
  }

  destroyTimerView() {
    const appDiv = document.querySelector(`.timer`);
    appDiv.innerHTML = ``;

    if (this.timerStopFunction) {
      this.timerStopFunction();
    }
  }

  showWelcome() {
    welcome.init();
  }

  showGame() {
    game.init();
  }

  initLocation() {
    const params = this.getJSONHashString(location.hash);

    this.changeController(this.getRawHashString(location.hash), params);
  }

  getRawHashString(hash) {
    let returnString = hash.replace(`#`, ``);

    const index = hash.indexOf(`=`);
    if (index > 0) {
      returnString = returnString.substr(0, index - 1);
    }

    return returnString;
  }

  getJSONHashString(hash) {
    let returnString = hash.replace(`#`, ``);
    const index = hash.indexOf(`=`);

    if (index > 0) {
      returnString = returnString.substr(index);
    }

    try {
      return JSON.parse(returnString);
    } catch (error) {
      return null;
    }
  }

  changeController(route = ``, params) {
    const controller = this._routes[route];
    game.destroy();

    if (controller) {
      controller.init(params);
    } else {
      this.showWelcome();
    }
  }
}

export default new Application();
