/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import main from './main.js';
import * as gameData from './data.js';

const LOGO = `<section class="logo" title="${gameData.gameInfo.gameName}"><h1>${gameData.gameInfo.gameName}</h1></section>`;

const screenTemplate = (gameInfo) => `<section class="main main--welcome">
    ${LOGO}
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      ${gameInfo.rules}      
    </p>
  </section>`;

export default function getScreen() {
  const screenDom = convertToHtml(screenTemplate(gameData.gameInfo));
  let button = screenDom.querySelector(`.main-play`);
  button.onclick = () => {
    main.screenView.showQuestion();
  };

  return screenDom;
}
