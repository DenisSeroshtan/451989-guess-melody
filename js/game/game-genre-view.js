import AbstractView from '../view.js';

export default class GameGenreView extends AbstractView {

  constructor(question) {
    super();

    this.question = question;
  }

  get template() {
    return `<section class="main main--level main--level-genre">
    <div class="main-wrap">
      <h2 class="title">${this.question.data.toLowerCase()}</h2>
      <form class="genre">
        ${Array.prototype.slice.call(this.question.answers, 0).map((answer, index) =>
           this.createSong(index, answer)
        )}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;
  }

  createSong(index, answer) {
    return `<div class="genre-answer">
      <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-${index}">
        <label class="genre-answer-check" for="a-${index}"></label>
      </div>`;
  }

  onAnswer(...indexes) {

  }

  bind() {
    const screenDom = this.element;

    this.answers = Array.prototype.slice.call(screenDom.querySelectorAll(`.genre-answer`), 0);
    this.answerButton = screenDom.querySelector(`.genre-answer-send`);

    const playerWrappers = Array.prototype.slice.call(screenDom.querySelectorAll(`.player-wrapper`), 0);

    playerWrappers.forEach((item, i) => {
      item.addEventListener(`click`, (event) => {
        event.preventDefault();

        if (this.currentAudio) {
          this.currentAudio.pause();
        }

        this.currentAudio = Array.prototype.slice.call(item.querySelectorAll(`audio`))[0];
      });

      window.initializePlayer(item, Array.prototype.slice.call(this.question.answers, 0)[i].file, false, true);
    });

    this.answers.forEach((item) => {
      const checkbox = item.querySelector(`input`);

      checkbox.addEventListener(`click`, () => {
        this.answerClickHandler();
      });
    });

    this.answerButton.disabled = true;

    this.answerButton.onclick = (event) => {
      event.preventDefault();

      const answerIndexes = [];
      Array.prototype.slice.call(this.answers, 0).forEach((item, i, array) => {
        if (this.answers[i].querySelector(`input`).checked) {
          answerIndexes.push(i);
        }
      });

      this.onAnswer(...answerIndexes);
    };
  }

  answerClickHandler() {
    this.answerButton.disabled = false;
  }

}
