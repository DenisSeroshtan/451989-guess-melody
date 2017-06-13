import assert from 'assert';
import {deepCopy} from '../utils.js';
import * as gameState from '../state.js';

describe(`Game Logic`, () => {
  const artistQuestion = JSON.parse(`{"type":1,"data":{"artistName":"Lana Del Rey","song":"Blue Jeans (RAC Remix)","file":"sound/2.mp3","genre":"Indie"},"answers":[{"valid":true,"artistName":"Lana Del Rey","image":"./img/artists/lana_del_rey.jpeg"},{"valid":false,"artistName":"Lykke Li","image":"./img/artists/lykke_li.jpg"},{"valid":false,"artistName":"Justice","image":"./img/artists/justice.jpg"}]}`);
  const genreQuestion = JSON.parse(`{"type":2,"data":{"genreName":"Indie","description":"Инди-рок"},"answers":[{"valid":true,"song":"Blue Jeans (RAC Remix)","file":"sound/2.mp3"},{"valid":true,"song":"Breaking It Up (Familjen Remix)","file":"sound/3.mp3"},{"valid":false,"song":"Justice - D.A.N.C.E.","file":"sound/1.mp3"}]}`);
  const questions = [artistQuestion, genreQuestion, artistQuestion, artistQuestion, genreQuestion];

  describe(`Game Logic Test`, () => {
    gameState.state.questions = deepCopy(questions);

    it(`state should GAME_STATE === 2`, () => {
      gameState.showGame();
      assert.equal(gameState.GAME_STATE, gameState.getCurrentState());
    });

    it(`All answers correct, state should be WIN_STATE === 3`, () => {
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

      assert.equal(gameState.WIN_STATE, gameState.getCurrentState());
    });

    it(`All answers incorrect, state should be FAIL_STATE === 4`, () => {
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

      assert.equal(gameState.FAIL_STATE, gameState.getCurrentState());
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

    it(`Time left, state should be FAIL_STATE === 4`, () => {
      gameState.resetGame();
      gameState.showGame();
      gameState.setTime(0);

      assert.equal(gameState.FAIL_STATE, gameState.getCurrentState());
    });
  });
});