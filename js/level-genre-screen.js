/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import main from './main.js';

const screenElement = convertToHtml(`<section class="main main--level main--level-genre">
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
  </section>`);
// export default screenElement;

const answers = screenElement.querySelectorAll(`.genre-answer`);
const sendButton = screenElement.querySelector(`.genre-answer-send`);

export default function getScreen() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener(`click`, answerClickHandler);
  }

  sendButton.disabled = true;

  sendButton.onclick = (event) => {
    event.preventDefault();

    const jumper = Math.round(Math.random());
    main.screenView.showScreen(3 + jumper);
  };

  return screenElement;
}

function answerClickHandler() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].removeEventListener(`click`, answerClickHandler);
  }

  sendButton.disabled = false;
}
