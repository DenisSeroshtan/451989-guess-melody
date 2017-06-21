import assert from 'assert';
import {deepCopy} from '../utils.js';
import gameModel from '../game/game-model.js';

const artistQuestion = JSON.parse(`{"type":1,"data":{"artistName":"Lana Del Rey","song":"Blue Jeans (RAC Remix)","file":"sound/2.mp3","genre":"Indie"},"answers":[{"valid":true,"artistName":"Lana Del Rey","image":"./img/artists/lana_del_rey.jpeg"},{"valid":false,"artistName":"Lykke Li","image":"./img/artists/lykke_li.jpg"},{"valid":false,"artistName":"Justice","image":"./img/artists/justice.jpg"}]}`);
const genreQuestion = JSON.parse(`{"type":2,"data":{"genreName":"Indie","description":"Инди-рок"},"answers":[{"valid":true,"song":"Blue Jeans (RAC Remix)","file":"sound/2.mp3"},{"valid":true,"song":"Breaking It Up (Familjen Remix)","file":"sound/3.mp3"},{"valid":false,"song":"Justice - D.A.N.C.E.","file":"sound/1.mp3"}]}`);
const questions = [artistQuestion, genreQuestion, artistQuestion, artistQuestion, genreQuestion];

describe(`Game Logic Test`, () => {
  gameModel.questions = deepCopy(questions);

  beforeEach(function () {
    gameModel.resetGame();
    gameModel.questions = deepCopy(questions);
  });

  it(`All answers correct, game should be succeas`, () => {
    questions.forEach((item, i, array) => {
      switch (item.type) {
        case gameModel.GENRE_QUESTION_TYPE:
          gameModel.answer(0, 1);
          break;
        case gameModel.ARTIST_QUESTION_TYPE:
          gameModel.answer(0);
          break;
      }
    });

    assert.equal(false, gameModel.isFail);
  });

  it(`All answers incorrect, game should be fail`, () => {
    questions.forEach((item, i, array) => {
      switch (item.type) {
        case gameModel.QuestionType.GENRE:
          gameModel.answer(2);
          break;
        case gameModel.QuestionType.ARTIST:
          gameModel.answer(1);
          break;
      }
    });

    assert.equal(true, gameModel.isFail);
  });

  it(`All answers incorrect, lifes should be 0`, () => {
    questions.forEach((item, i, array) => {
      switch (item.type) {
        case gameModel.QuestionType.GENRE:
          gameModel.answer(2);
          break;
        case gameModel.QuestionType.ARTIST:
          gameModel.answer(1);
          break;
      }
    });

    assert.equal(0, gameModel.lifes);
  });

  it(`Time left, game should be fail`, () => {
    gameModel.resetGame();
    gameModel.timeLeft = 0;

    assert.equal(true, gameModel.isFail);
  });
});
