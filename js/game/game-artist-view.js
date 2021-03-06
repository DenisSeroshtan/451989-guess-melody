import AbstractView from '../view.js';

export default class GameArtistView extends AbstractView {
  constructor(question) {
    super();

    this.question = question;
  }

  get template() {
    return `<section class="main main--level main--level-artist">
      <div class="main-wrap">
        <div class="main-timer"></div>
  
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${Array.prototype.slice.call(this.question.answers, 0).map((answer, index) =>
            this.createAnswer(index, answer)
          )}
        </form>
      </div>
    </section>`;
  }

  createAnswer(index, answer) {
    return `<div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="${index}" />
      <label class="main-answer" for="answer-1">
        <img class="main-answer-preview" src="${answer.image}">
        ${answer.artistName}
      </label> 
    </div>`;
  }

  onAnswer(...indexes) {

  }

  bind() {
    const screenDom = this.element;
    const answers = Array.prototype.slice.call(screenDom.querySelectorAll(`.main-answer-wrapper`), 0);
    const player = screenDom.querySelector(`.player-wrapper`);

    const artistSong = this.question.data;
    window.initializePlayer(player, artistSong.file, true, true);

    for (let answer of answers) {
      answer.addEventListener(`click`, (event) => {
        event.preventDefault();

        const wrapperElement = event.currentTarget;
        const index = wrapperElement.querySelector(`.main-answer-r`).value;
        this.onAnswer(index);
      });
    }
  }


}
