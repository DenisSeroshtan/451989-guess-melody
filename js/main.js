/**
 * Created by kleone on 25.05.2017.
 */

class Main {

  constructor() {
    this.mainScreen = document.querySelector(`.main`);
    this.screens = [];
    this.currentIndex = 0;

    window.onkeydown = (event) => {
      if (event.altKey && event.keyCode === 37) {
        event.preventDefault();

        if (this.currentIndex > 0) {
          this.showScreen(this.currentIndex - 1);
        }
        
        return;
      }

      if (event.altKey && event.keyCode === 39) {
        event.preventDefault();

        if (this.currentIndex < this.screens.length - 1) {
          this.showScreen(this.currentIndex + 1);
        }

        return;
      }
    };
  }

  init() {
    // const mainScreen = document.querySelector(`.main`);
    // const screens = [];

    const templates = document.getElementById(`templates`);

    const WELCOME_SCREEN = templates.content.querySelector(`.main--welcome`);

    const GAME_GENRE_SELECT_SCREEN = templates.content.querySelector(`.main--level.main--level-genre`);
    const GAME_ARTIST_SELECT_SCREEN = templates.content.querySelector(`.main--level.main--level-artist`);

    const RESULT_FAIL_SCREEN = templates.content.querySelectorAll(`.main--result`)[0];
    const RESULT_SUCCESS_SCREEN = templates.content.querySelectorAll(`.main--result`)[1];

    this.screens.push(WELCOME_SCREEN);
    this.screens.push(GAME_GENRE_SELECT_SCREEN);
    this.screens.push(GAME_ARTIST_SELECT_SCREEN);
    this.screens.push(RESULT_SUCCESS_SCREEN);
    this.screens.push(RESULT_FAIL_SCREEN);

    const START_INDEX = 0;
    this.mainScreen.appendChild(this.screens[START_INDEX]);
    this.currentIndex = START_INDEX;
  }

  showScreen(screenId) {
    const prevChild = this.screens[this.currentIndex];

    this.currentIndex = screenId;

    this.mainScreen.replaceChild(this.screens[this.currentIndex], prevChild);
  }
}

let main = new Main();
main.init();
