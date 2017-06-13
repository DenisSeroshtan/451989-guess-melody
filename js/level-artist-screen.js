/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import * as gameState from './state.js';
import main from './main.js';
import timer from './timer-view';

const screenTemplate = (currentQuestion) => {
  return `<section class="main main--level main--level-artist">
      ${timer()}
  
      <div class="main-wrap">
        <div class="main-timer"></div>
  
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${[...currentQuestion.answers].map((answer, index) => {
            return createAnswer(index, answer);
          })}
        </form>
      </div>
    </section>`;
};

export default function getScreen() {
  const currentQuestion = gameState.getCurrentQuestion();

  const screenDom = convertToHtml(screenTemplate(currentQuestion));
  const answers = screenDom.querySelectorAll(`.main-answer-wrapper`);
  const player = screenDom.querySelector(`.player-wrapper`);
  const artistSong = currentQuestion.data;
  window.initializePlayer(player, artistSong.file, true, true);

  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener(`click`, (event) => {
      event.preventDefault();

      const wrapperElement = event.currentTarget;
      const index = wrapperElement.querySelector(`.main-answer-r`).value;

      gameState.answer(index);
      main.screenView.renderState();
    });
  }

  return screenDom;
}

function createAnswer(index, answer) {
  return `<div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="${index}" />
    <label class="main-answer" for="answer-1">
    <img class="main-answer-preview" src="${answer.image}">
    ${answer.artistName}
    </label>
    </div>`;
}
