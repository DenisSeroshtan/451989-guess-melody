import assert from 'assert';
import {deepCopy} from '../utils.js';
import * as gameState from '../state.js';

const artistQuestion = JSON.parse(`{"type":1,"data":{"artistName":"Lana Del Rey","song":"Blue Jeans (RAC Remix)","file":"sound/2.mp3","genre":"Indie"},"answers":[{"valid":true,"artistName":"Lana Del Rey","image":"./img/artists/lana_del_rey.jpeg"},{"valid":false,"artistName":"Lykke Li","image":"./img/artists/lykke_li.jpg"},{"valid":false,"artistName":"Justice","image":"./img/artists/justice.jpg"}]}`);
const genreQuestion = JSON.parse(`{"type":2,"data":{"genreName":"Indie","description":"Инди-рок"},"answers":[{"valid":true,"song":"Blue Jeans (RAC Remix)","file":"sound/2.mp3"},{"valid":true,"song":"Breaking It Up (Familjen Remix)","file":"sound/3.mp3"},{"valid":false,"song":"Justice - D.A.N.C.E.","file":"sound/1.mp3"}]}`);
const questions = [artistQuestion, genreQuestion, artistQuestion, artistQuestion, genreQuestion];

describe(`Game Logic Test`, () => {
  gameState.state.questions = deepCopy(questions);

  it(`gamescreen should be === 2`, () => {
    gameState.showGame();
    assert.equal(gameState.GAME_SCREEN, gameState.getCurrentState());
  });

  it(`All answers correct, game should be succeas`, () => {
    gameState.resetGame();
    gameState.showGame();
    gameState.state.questions = deepCopy(questions);
    questions.forEach((item, i, array) => {
      switch (item.type) {
        case gameState.GENRE_QUESTION_TYPE:
          gameState.answer(0, 1);
          break;
        case gameState.ARTIST_QUESTION_TYPE:
          gameState.answer(0);
          break;
      }
    });

    assert.equal(false, gameState.isFail());
  });

  it(`All answers incorrect, game should be fail`, () => {
    gameState.resetGame();
    gameState.showGame();
    gameState.state.questions = deepCopy(questions);
    questions.forEach((item, i, array) => {
      switch (item.type) {
        case gameState.GENRE_QUESTION_TYPE:
          gameState.answer(2);
          break;
        case gameState.ARTIST_QUESTION_TYPE:
          gameState.answer(1);
          break;
      }
    });

    assert.equal(true, gameState.isFail());
  });

  it(`All answers incorrect, lifes should be 0`, () => {
    gameState.resetGame();
    gameState.showGame();
    gameState.state.questions = deepCopy(questions);
    questions.forEach((item, i, array) => {
      switch (item.type) {
        case gameState.GENRE_QUESTION_TYPE:
          gameState.answer(2);
          break;
        case gameState.ARTIST_QUESTION_TYPE:
          gameState.answer(1);
          break;
      }
    });

    assert.equal(0, gameState.getLifes());
  });

  it(`Time left, game should be fail`, () => {
    gameState.resetGame();
    gameState.showGame();
    gameState.setTime(0);

    assert.equal(true, gameState.isFail());
  });
});
