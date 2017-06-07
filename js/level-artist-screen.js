/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import main from './main.js';
import * as gameData from './data.js';

const screenTemplate = (currentQuestion) => `<section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">02</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>

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
    answers[i].onclick = () => {
      gameData.gameState.currentQuestion++;
      main.screenView.showNextQuestion();
    };
  }

  return screenDom;
}

function createAnswer(index, answer) {
  return `<div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-1" />
    <label class="main-answer" for="answer-1">
    <img class="main-answer-preview" src="${answer.image}">
    ${answer.artistName}
    </label>
    </div>`;
}
