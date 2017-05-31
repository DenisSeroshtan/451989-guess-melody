/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import main from './main.js';
import welcomeScreen from './welcome-screen.js';

const screenElement = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
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
