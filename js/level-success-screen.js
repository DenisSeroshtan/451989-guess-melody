/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import * as gameData from './data.js';
import welcomeScreen from './welcome-screen';
import main from './main.js';

const screenTemplate = () => `<section class="main main--result">
    <section class="logo" title="${gameData.gameInfo.gameName}"><h1>${gameData.gameInfo.gameName}</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;${Math.round(gameData.gameState.time / 60)}&nbsp;минуты<br>вы&nbsp;отгадали ${gameData.gameState.correctAnswers}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${gameData.getPercentHighscore()}&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

export default function getScreen() {
  const screenDom = convertToHtml(screenTemplate());

  let button = screenDom.querySelector(`.main-replay`);
  button.onclick = () => {
    main.screenView.showScreen(welcomeScreen());
  };

  return screenDom;
}
