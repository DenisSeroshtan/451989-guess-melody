/**
 * Created by kleone on 25.05.2017.
 */
import ScreenView from './screen-view.js';
import welcomScreen from './welcome-screen.js';

export default main;

class Main {
  constructor() {
    this.screenView = new ScreenView();
    this.screenView.showScreen(welcomScreen());
  }

  init() {

  }
}
const main = new Main();
main.init();
