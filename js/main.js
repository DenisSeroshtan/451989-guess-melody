/**
 * Created by kleone on 25.05.2017.
 */
(function () {
  class Main {

    constructor() {
      this.mainScreen = document.querySelector(`.main`);
      this.screens = [];
      this.currentIndex = 0;
      this.screenQueue = [`main main--welcome`, `main main--level main--level-genre`, `main main--level main--level-artist`, `main main--result`];

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
      this.screens = Array.prototype.slice.call(templates.content.querySelectorAll(`.main`));
      this.screens.sort((screenA, screenB) => {
        if (this.screenQueue.indexOf(screenA.className) > this.screenQueue.indexOf(screenB.className)) {
          return 1;
        }
        if (this.screenQueue.indexOf(screenA.className) < this.screenQueue.indexOf(screenB.className)) {
          return -1;
        }

        return 0;
      });

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

})();
