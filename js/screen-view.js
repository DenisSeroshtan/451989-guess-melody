/**
 * Created by kleone on 30.05.2017.
 */
export default class ScreenView {
  constructor() {
    this.mainScreen = document.querySelector(`.main`);
/*    const START_INDEX = 0;

    this.mainScreen = document.querySelector(`.main`);
    this.screens = [welcomScreen, artistScreen, genreScreen, successScreen, failScreen];

    this.mainScreen.appendChild(this.screens[START_INDEX]());
    this.currentIndex = START_INDEX;*/
  }

/*
  showScreen(screenId) {
    const prevChild = this.mainScreen.querySelectorAll(`*`)[0];

    this.currentIndex = screenId;

    this.mainScreen.replaceChild(this.screens[this.currentIndex](), prevChild);
  }
  */

  showScreen(screenFragment) {
    const prevChild = this.mainScreen.querySelectorAll(`*`)[0];

    if (prevChild) {
      this.mainScreen.replaceChild(screenFragment, prevChild);
    } else {
      this.mainScreen.appendChild(screenFragment);
    }
  }

}
