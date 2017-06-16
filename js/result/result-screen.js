import {renderState} from '../main.js';
import * as state from '../state.js';
import ResultSuccessView from './result-success-view.js';
import ResultFailView from './result-fail-view.js';

const successView = new ResultSuccessView();
const failView = new ResultFailView();

successView.onRestartClick = restart;
failView.onRestartClick = restart;

function restart() {
  state.resetGame();
  renderState();
}

export function show() {
  if (state.isFail()) {
    failView.create();
    failView.show();
  } else {
    successView.create();
    successView.show();
  }
}
