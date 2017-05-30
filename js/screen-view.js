/**
 * Created by kleone on 30.05.2017.
 */
import welcomScreen from './welcome-screen.js';
import artistScreen from './level-artist-screen.js';
import genreScreen from './level-genre-screen';
import successScreen from './level-success-screen';
import failScreen from './level-fail-screen';

export default class ScreenView {
  constructor() {
    const START_INDEX = 0;

    this.mainScreen = document.querySelector(`.main`);
    this.screens = [welcomScreen(), artistScreen(), genreScreen(), successScreen(), failScreen()];

    this.mainScreen.appendChild(this.screens[START_INDEX]);
    this.currentIndex = START_INDEX;
  }

  showScreen(screenId) {
    const prevChild = this.mainScreen.querySelectorAll(`*`)[0];
    let newChild = this.screens[this.currentIndex];

    this.currentIndex = screenId;

    // this.mainScreen.replaceChild(this.screens[this.currentIndex], prevChild); если эту строчку включить то перестает работать совсем
    this.mainScreen.replaceChild(this.screens[this.currentIndex], prevChild);
  }
}
