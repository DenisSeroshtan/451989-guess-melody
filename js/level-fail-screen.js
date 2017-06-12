/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import * as gameData from './data.js';
import * as gameState from './state.js';
import main from './main.js';

const screenTemplate = () => `<section class="main main--result">
    <section class="logo" title="${gameData.gameInfo.gameName}"><h1>${gameData.gameInfo.gameName}</h1></section>
    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
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
