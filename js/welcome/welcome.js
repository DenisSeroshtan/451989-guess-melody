import WelcomeView from './welcome-view.js';
import {renderState} from '../main.js';
import * as state from '../state.js';

const view = new WelcomeView();
view.onStartClick = () => {
  state.showGame();
  renderState();
};

export function show() {
  view.create();
  view.show();
}
