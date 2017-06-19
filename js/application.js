import welcome from './welcome/welcome-presenter.js';
import game from './game/game-presenter.js';
import result from './result/result-presenter.js';

class Application {
  constructor() {
    this.ControllerId = {
      WELCOME: ``,
      GAME: `game`,
      RESULT: `result`
    };

    this.routes = {
      [this.ControllerId.WELCOME]: welcome,
      [this.ControllerId.GAME]: game,
      [this.ControllerId.RESULT]: result
    };

    window.onhashchange = () => {
      this.initLocation();
    };
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
    if (returnString.indexOf(`=`) > 0) {
      returnString = returnString.substr(0, returnString.indexOf(`=`));
    }

    return returnString;
  }

  getJSONHashString(hash) {
    let returnString = hash.replace(`#`, ``);
    if (returnString.indexOf(`=`) > 0) {
      returnString = returnString.substr(returnString.indexOf(`=`) + 1);
    }

    try {
      return JSON.parse(returnString);
    } catch (error) {
      return null;
    }
  }

  changeController(route = ``, params) {
    const controller = this.routes[route];
    game.destroy();

    if (controller) {
      if (params) {
        controller.init(params);
      } else {
        controller.init();
      }
    } else {
      this.showWelcome();
    }
  }
}

const application = new Application();
export default application;
