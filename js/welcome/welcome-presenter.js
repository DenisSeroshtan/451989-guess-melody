import WelcomeView from './welcome-view.js';
import Application from '../application.js';

class WelcomePresenter {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    this.view.create();
    this.view.show();
    this.view.onStartClick = () => {
      Application.showGame();
    };
  }
}

const welcome = new WelcomePresenter();
export default welcome;
