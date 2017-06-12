/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import * as gameData from './data.js';
import timer from './timer-view';

const screenTemplate = (currentQuestion) => `<section class="main main--level main--level-artist">
    ${timer()}

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${[...gameData.gameState.currentQuestion.answers].map((answer, index) => {
          return createAnswer(index, answer);
        })}
      </form>
    </div>
  </section>`;
// export default screenElement;

export default function getScreen() {
  const currentQuestion = gameData.gameState.currentQuestion;

  const screenDom = convertToHtml(screenTemplate(currentQuestion));
  const answers = screenDom.querySelectorAll(`.main-answer-wrapper`);
  const player = screenDom.querySelector(`.player-wrapper`);
  const artistSong = gameData.gameState.currentQuestion.data;
  window.initializePlayer(player, artistSong.file, true, true);

  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener(`click`, (event) => {
      event.preventDefault();

      const wrapperElement = event.currentTarget;
      const index = wrapperElement.querySelector('.main-answer-r').value;

      const answer = [...gameData.gameState.currentQuestion.answers][index];
      answer.selected = true;
      gameData.answer(answer);
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
