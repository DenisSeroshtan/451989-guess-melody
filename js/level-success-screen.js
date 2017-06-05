/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import main from './main.js';
import welcomeScreen from './welcome-screen.js';
import * as gameData from './data.js';

const LOGO = `<section class="logo" title="${gameData.gameInfo.gameName}"><h1>${gameData.gameInfo.gameName}</h1></section>`;

const screenElement = `<section class="main main--result">
    ${LOGO}
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;${Math.round(gameData.initGameState.time / 60)}&nbsp;минуты<br>вы&nbsp;отгадали ${gameData.initGameState.correctAnswers}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${gameData.getPercentHighscore()}&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

export default function getScreen() {
  const screenDom = convertToHtml(screenElement);

  let button = screenDom.querySelector(`.main-replay`);
  button.onclick = () => {
    main.screenView.showScreen(welcomeScreen());
  };

  return screenDom;
}
