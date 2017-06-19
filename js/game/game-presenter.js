import GenreView from './game-genre-view.js';
import ArtistView from './game-artist-view.js';
import gameModel from './game-model.js';
import Application from '../application.js';

class GamePresenter {

  constructor(model) {
    this.model = model;
  }

  init() {
    if (this.model.state.currentIndex === 0) {
      this.timer = setInterval(() =>
        this.updateTimer()
      , 1000);
    }

    switch (this.model.currentQuestion.type) {
      case this.model.QuestionType.ARTIST:
        this.view = new ArtistView(this.model.currentQuestion);
        break;
      case this.model.QuestionType.GENRE:
        this.view = new GenreView(this.model.currentQuestion);
        break;
    }

    this.view.create();
    this.view.show();
    this.view.onAnswer = (...answerIndexes) => {
      this.model.answer(...answerIndexes);
    };

    this.model.onNextQuestion = () => {
      Application.showGame();
    };

    this.model.onFinishGame = () => {
      if (this.model.isFail) {
        Application.showResult(null);
      } else {
        Application.showResult(this.model.stats);
      }

      clearInterval(this.timer);
      this.model.resetGame();
    };
  }

  updateTimer() {
    this.model.timeLeft--;

    const timerMin = document.getElementsByClassName(`timer-value-mins`)[0];
    const timerSec = document.getElementsByClassName(`timer-value-secs`)[0];

    const minutes = Math.floor(this.model.timeLeft / 60);
    const seconds = this.model.timeLeft - (minutes * 60);

    timerMin.innerHTML = minutes.toString().length === 1 ? `0${minutes}` : minutes;
    timerSec.innerHTML = seconds.toString().length === 1 ? `0${seconds}` : seconds;
  }
}

const game = new GamePresenter(gameModel);
export default game;

