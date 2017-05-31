/**
 * Created by kleone on 30.05.2017.
 */
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

}
