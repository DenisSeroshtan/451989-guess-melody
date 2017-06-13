/**
 * Created by kleone on 30.05.2017.
 */
import * as gameState from './state.js';

import welcomeScreen from './welcome/welcome.js';
import successScreen from './level-success-screen';
import failScreen from './level-fail-screen';
import artistScreen from './level-artist-screen.js';
import genreScreen from './level-genre-screen.js';

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

  renderState() {
    switch (gameState.getCurrentState()) {
      case gameState.WELCOME_STATE:
        this.showScreen(welcomeScreen());
        break;
      case gameState.WIN_STATE:
        this.showScreen(successScreen());
        break;
      case gameState.FAIL_STATE:
        this.showScreen(failScreen());
        break;
      case gameState.GAME_STATE:
        this.renderQuestion();
        break;
    }
  }

  renderQuestion() {
    switch (gameState.getCurrentQuestion().type) {
      case gameState.ARTIST_QUESTION_TYPE:
        this.showScreen(artistScreen());
        break;
      case gameState.GENRE_QUESTION_TYPE:
        this.showScreen(genreScreen());
        break;
    }
  }
}
