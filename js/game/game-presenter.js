import GenreView from './game-genre-view.js';
import ArtistView from './game-artist-view.js';
import gameModel from './game-model.js';
import application from '../application.js';

class GamePresenter {

  constructor(model) {
    this._model = model;
  }

  init() {
    switch (this._model.currentQuestion.type) {
      case this._model.QuestionType.ARTIST:
        this.view = new ArtistView(this._model.currentQuestion);
        break;
      case this._model.QuestionType.GENRE:
        this.view = new GenreView(this._model.currentQuestion);
        break;
    }

    this.view.create();
    this.view.show();
    this.view.onAnswer = (...answerIndexes) => this._model.answer(...answerIndexes);

    this._model.onNextQuestion = () => {
      application.showGame();
    };

    this._model.onFinishGame = () => {
      if (this._model.isFail) {
        location.hash = application.ControllerId.RESULT;
      } else {
        location.hash = `${application.ControllerId.RESULT}=${JSON.stringify(this._model._stats)}`;
      }

      this.destroy();
    };

    if (this._model.state.currentIndex === 0) {
      application.initTimerView(this._model.timeLeft);

      this.timer = setInterval(() =>
          this.updateTimer()
        , 1000);
    }
  }

  destroy() {
    clearInterval(this.timer);
    this._model.resetGame();
  }

  updateTimer() {
    this._model.timeLeft--;
  }
}

export default new GamePresenter(gameModel);

