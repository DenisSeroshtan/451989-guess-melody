/**
 * Created by kleone on 30.05.2017.
 */
import * as gameData from './data.js';
import artistScreen from './level-artist-screen.js';
import genreScreen from './level-genre-screen.js';
import failScreen from './level-fail-screen.js';
import successScreen from './level-success-screen.js';

export default class ScreenView {
  constructor() {
    this.mainScreen = document.querySelector(`.main`);
  }

  showScreen(screenFragment) {
    const prevChild = this.mainScreen.querySelectorAll(`*`)[0];

    if (prevChild) {
      this.mainScreen.replaceChild(screenFragment, prevChild);
    } else {
      this.mainScreen.appendChild(screenFragment);
    }
  }

  showQuestion() {
    gameData.gameState.currentQuestion = gameData.questions[gameData.gameState.currentQuestionIndex];
    switch (gameData.gameState.currentQuestion.type) {
      case gameData.ARTIST_QUESTION_TYPE:
        this.showScreen(artistScreen());

        break;
      case gameData.GENRE_QUESTION_TYPE:
        this.showScreen(genreScreen());

        break;
    }
  }

  showNextQuestion() {
    gameData.gameState.currentQuestionIndex++;

    if (gameData.gameState.currentQuestionIndex >= gameData.questions.length) {
      const jumper = Math.round(Math.random());
      const resultScreens = [failScreen, successScreen];
      this.showScreen(resultScreens[jumper]());
      gameData.resetGameState();
    } else {
      this.showQuestion();
    }
  }

}
