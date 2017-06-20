import SuccessView from './result-success-view.js';
import FailView from './result-fail-view.js';
import application from '../application.js';

class ResultPresenter {
  constructor() {
    this.initStatistics = [
      {time: 20, answers: 10},
      {time: 32, answers: 10},
      {time: 44, answers: 10},
      {time: 20, answers: 8},
      {time: 50, answers: 7}
    ];
  }

  init(stats) {
    if (stats) {
      stats.percentHighscore = this.getPercentHighscore(stats.correctAnswers, stats.time);

      this.view = new SuccessView(stats);
    } else {
      this.view = new FailView();
    }

    this.view.create();
    this.view.show();

    this.view.onRestartClick = () => {
      location.hash = application.ControllerId.WELCOME;
    };
  }

  getPercentHighscore(correctAnswers, time) {
    this.initStatistics.push({answers: correctAnswers, time, isPlayerResult: true});

    this.initStatistics.sort((a, b) => {
      return b.answers - a.answers || a.time - b.time;
    });

    const playerIndex = this.initStatistics.findIndex((item) => {
      if (item.isPlayerResult) {
        delete item.isPlayerResult;
        return true;
      }

      return false;
    });

    const result = 100 - ((playerIndex + 1) / this.initStatistics.length) * 100;
    return Math.floor(result) + `%`;
  }
}
export default new ResultPresenter();
