/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import main from './main.js';
import * as gameData from './data.js';

const screenTemplate = (currentQuestion) => `<section class="main main--level main--level-genre">
    <h2 class="title">Выберите ${currentQuestion.data.description.toLowerCase()} треки</h2>
    <form class="genre">
      ${[...currentQuestion.answers].map((answer, index) => {
        return createSong(index, answer.song);
      })}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;
// export default screenElement;

let answers;
let sendButton;

export default function getScreen() {
  const currentQuestion = gameData.gameState.currentQuestion;
  const screenDom = convertToHtml(screenTemplate(currentQuestion));
  answers = screenDom.querySelectorAll(`.genre-answer`);
  sendButton = screenDom.querySelector(`.genre-answer-send`);

  const playerWrappers = [...screenDom.querySelectorAll(`.player-wrapper`)];

  for (let i = 0; i < playerWrappers.length; i++) {
    window.initializePlayer(playerWrappers[i], [...currentQuestion.answers][i].data.file, false, true);
  }

  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener(`click`, answerClickHandler);
  }

  sendButton.disabled = true;

  sendButton.onclick = (event) => {
    event.preventDefault();

    main.screenView.showNextQuestion();
  };

  return screenDom;
}

function answerClickHandler() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].removeEventListener(`click`, answerClickHandler);
  }

  sendButton.disabled = false;
}

function createSong(index, song) {
  return `<div class="genre-answer">
            <div class="player-wrapper"></div>
            <input type="checkbox" name="answer" value="answer-1" id="a-${index}">
            <label class="genre-answer-check" for="a-${index}"></label>
          </div>`;
}
