import AbstractView from '../view.js';
import * as data from '../data.js';

export default class ResultFailView extends AbstractView {
  get template() {
    return `<section class="main main--result">
      <section class="logo" title="${data.gameInfo.gameName}"><h1>${data.gameInfo.gameName}</h1></section>
        <h2 class="title">Вы проиграли</h2>
        <div class="main-stat">Ничего, вам повезет в следующий раз</div>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>`;
  }

  onRestartClick() {

  }

  bind() {
    const screenDom = this.element;

    const button = screenDom.querySelector(`.main-replay`);
    button.onclick = () => {
      this.onRestartClick();
    };

    return screenDom;
  }
}
