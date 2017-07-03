import SuccessView from './result-success-view.js';
import FailView from './result-fail-view.js';
import application from '../application.js';
import resultModel from './result-model.js';

class ResultPresenter {
  init(userStat) {
    if (userStat) {
      resultModel.send(userStat);
      this.view = new SuccessView(Object.assign({}, userStat, {percentHighscore: this.getPercentHighscore(userStat)}));

    } else {
      this.view = new FailView();
    }

    this.view.create();
    this.view.show();

    this.view.onRestartClick = () => {
      location.hash = application.ControllerId.WELCOME;
    };

    application.destroyTimerView();
  }

  getPercentHighscore(userStat) {
    userStat.isPlayerResult = true;

    const serverStats = resultModel._stats;
    serverStats.push(userStat);

    serverStats.sort((a, b) => {
      return b.answers - a.answers || a.time - b.time;
    });

    const playerIndex = serverStats.findIndex((item) => {
      if (item.isPlayerResult) {
        item.isPlayerResult = false;
        return true;
      }

      return false;
    });

    const result = 100 - ((playerIndex) / serverStats.length) * 100;
    return Math.floor(result) + `%`;
  }
}
export default new ResultPresenter();
