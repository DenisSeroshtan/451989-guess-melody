/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import * as gameData from './data.js';
import * as gameState from './state.js';
import main from './main.js';

const screenTemplate = () => `<section class="main main--result">
    <section class="logo" title="${gameData.gameInfo.gameName}"><h1>${gameData.gameInfo.gameName}</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;${getTimeString()}<br>вы&nbsp;отгадали ${gameState.getCorrectAnswers()}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${gameData.getPercentHighscore(gameState.getCorrectAnswers())}&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

export default function getScreen() {
  const screenDom = convertToHtml(screenTemplate());

  let button = screenDom.querySelector(`.main-replay`);
  button.onclick = () => {
    gameState.resetGame();
    main.screenView.renderState();
  };

  return screenDom;
}

function getTimeString() {
  const time = gameState.initState.time - gameState.getTime();

  const mins = Math.floor(time / 60);
  const secs = time - (mins * 60);

  if (mins) {
    return mins + ` минуты ` + secs + ` секунды`;
  } else {
    return secs + ` секунды`;
  }
}
