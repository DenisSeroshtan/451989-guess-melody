/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import main from './main.js';

const screenElement = convertToHtml(`<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>`);

export default function getScreen() {
  let button = screenElement.querySelector(".main-play");
  button.onclick = () => {
    main.screenView.showScreen(1);
  }

  return screenElement;
}
