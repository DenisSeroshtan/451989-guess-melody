import GenreView from './game-genre-view.js';
import ArtistView from './game-artist-view.js';
import gameModel from './game-model.js';
import application from '../application.js';

class GamePresenter {

  constructor(model) {
    this.model = model;
  }

  init() {
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
    this.view.onAnswer = (...answerIndexes) => this.model.answer(...answerIndexes);

    this.model.onNextQuestion = () => {
      application.showGame();
    };

    this.model.onFinishGame = () => {
      if (this.model.isFail) {
        location.hash = application.ControllerId.RESULT;
      } else {
        location.hash = `${application.ControllerId.RESULT}=${JSON.stringify(this.model.stats)}`;
      }

      this.destroy();
    };

    if (this.model.state.currentIndex === 0) {
      application.initTimerView(this.model.timeLeft);

      this.timer = setInterval(() =>
          this.updateTimer()
        , 1000);
    }
  }

  destroy() {
    clearInterval(this.timer);
    this.model.resetGame();
  }

  updateTimer() {
    this.model.timeLeft--;
  }
}

export default new GamePresenter(gameModel);

