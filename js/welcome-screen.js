/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import main from './main.js';
import artistScreen from './level-artist-screen.js';

const screenElement = `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>`;

export default function getScreen() {
  const screenDom = convertToHtml(screenElement);
  let button = screenDom.querySelector(`.main-play`);
  button.onclick = () => {
    main.screenView.showScreen(artistScreen());
  };

  return screenDom;
}
