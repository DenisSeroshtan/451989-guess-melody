/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import main from './main.js';
import failScreen from './level-fail-screen.js';
import successScreen from './level-success-screen.js';

const screenElement = `<section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;
// export default screenElement;

let answers;
let sendButton;

export default function getScreen() {
  const screenDom = convertToHtml(screenElement);
  answers = screenDom.querySelectorAll(`.genre-answer`);
  sendButton = screenDom.querySelector(`.genre-answer-send`);

  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener(`click`, answerClickHandler);
  }

  sendButton.disabled = true;

  sendButton.onclick = (event) => {
    event.preventDefault();

    const jumper = Math.round(Math.random());
    const resultScreens = [failScreen, successScreen];
    main.screenView.showScreen(resultScreens[jumper]());
  };

  return screenDom;
}

function answerClickHandler() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].removeEventListener(`click`, answerClickHandler);
  }

  sendButton.disabled = false;
}
