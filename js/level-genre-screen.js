/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import main from './main.js';
import * as gameState from './state.js';
import timer from './timer-view';

const screenTemplate = (currentQuestion) => `<section class="main main--level main--level-genre">
    ${timer()}
    <div class="main-wrap">
      <h2 class="title">Выберите ${currentQuestion.data.description.toLowerCase()} треки</h2>
      <form class="genre">
        ${[...currentQuestion.answers].map((answer, index) => {
          return createSong(index, answer);
        })}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;
// export default screenElement;

let answers;
let answerButton;
let currentAudio;

export default function getScreen() {
  const currentQuestion = gameState.getCurrentQuestion();
  const screenDom = convertToHtml(screenTemplate(currentQuestion));

  answers = screenDom.querySelectorAll(`.genre-answer`);
  answerButton = screenDom.querySelector(`.genre-answer-send`);

  const playerWrappers = [...screenDom.querySelectorAll(`.player-wrapper`)];

  for (let i = 0; i < playerWrappers.length; i++) {
    playerWrappers[i].addEventListener(`click`, (event) => {
      event.preventDefault();

      if (currentAudio) {
        currentAudio.pause();
      }

      currentAudio = playerWrappers[i].querySelectorAll(`audio`)[0];
    });

    window.initializePlayer(playerWrappers[i], [...currentQuestion.answers][i].file, false, true);
  }

  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener(`click`, answerClickHandler);
  }

  answerButton.disabled = true;

  answerButton.onclick = (event) => {
    event.preventDefault();

    const answerIndexes = [];
    [...answers].forEach((item, i, array) => {
      if (answers[i].querySelector(`input`).checked) {
        answerIndexes.push(i);
      }
    });

    gameState.answer(...answerIndexes);
    main.screenView.renderState();
  };

  return screenDom;
}

function answerClickHandler() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].removeEventListener(`click`, answerClickHandler);
  }

  answerButton.disabled = false;
}

function createSong(index, answer) {
  return `<div class="genre-answer">
            <div class="player-wrapper"></div>
            <input type="checkbox" name="answer" value="answer-1" id="a-${index}">
            <label class="genre-answer-check" for="a-${index}"></label>
          </div>`;
}
