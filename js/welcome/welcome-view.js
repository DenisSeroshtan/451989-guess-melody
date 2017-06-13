import AbstractView from '../view.js';
import * as data from '../data.js';

export default class WelcomeView extends AbstractView {

  get template() {
    return `<section class="main main--welcome">
    <section class="logo" title="${data.gameInfo.gameName}"><h1>${data.gameInfo.gameName}</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      ${data.rules}      
    </p>
    </section>`;
  }

  bind() {
    const button = this.element.querySelector(`.main-play`);
    button.onclick = () => {
      console.log('bingo');
    };
  }

}
