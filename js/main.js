import * as state from 'state.js';
import welcomeScreen from './welcome/welcome.js';

const mainScreen = document.querySelector(`.main`);

function renderState() {
  switch (state.getCurrentState()) {
    case state.WELCOME_STATE:
      this.showScreen(welcomeScreen());
      break;
    case state.WIN_STATE:

      break;
    case state.FAIL_STATE:

      break;
    case state.GAME_STATE:

      break;
  }
}

function setView(view) {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(view);
}
