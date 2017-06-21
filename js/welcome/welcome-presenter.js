import WelcomeView from './welcome-view.js';
import application from '../application.js';

class WelcomePresenter {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    this.view.create();
    this.view.show();
    this.view.onStartClick = () => {
      location.hash = application.ControllerId.GAME;
    };
  }
}

const welcome = new WelcomePresenter();
export default welcome;
