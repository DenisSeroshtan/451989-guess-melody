/**
 * Created by kleone on 30.05.2017.
 */
import convertToHtml from './string-to-html.js';
import main from './main.js';
import genreScreen from './level-genre-screen.js';
import * as gameData from './data.js';

const screenElement = `<section class="main main--level main--level-artist">
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
        ${gameData.getInvalidAndValidArtists(gameData.getRandomArtist()).map((artist, index) => {
          return createAnswer(index, artist);
        })}
      </form>
    </div>
  </section>`;
// export default screenElement;

export default function getScreen() {
  const screenDom = convertToHtml(screenElement);
  const answers = screenDom.querySelectorAll(`.main-answer-wrapper`);

  for (let i = 0; i < answers.length; i++) {
    answers[i].onclick = () => {
      main.screenView.showScreen(genreScreen());
    };
  }

  return screenDom;
}

function createAnswer(index, artistObject) {
  return `<div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-1" />
    <label class="main-answer" for="answer-1">
    <img class="main-answer-preview" src="${artistObject.image}">
    ${artistObject.artistName}
    </label>
    </div>`;
}
