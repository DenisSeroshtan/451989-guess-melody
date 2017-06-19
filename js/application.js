import welcome from './welcome/welcome-presenter.js';
import game from './game/game-presenter.js';
import result from './result/result-presenter.js';

export default class Application {
  static showWelcome() {
    welcome.init();
  }

  static showGame() {
    game.init();
  }

  static showResult(stats) {
    result.init(stats);
  }
}
