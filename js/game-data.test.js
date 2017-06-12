import assert from 'assert';

import * as gameData from './data.js';

describe(`Game Logic`, () => {
  const artistQuestion = JSON.parse(`{"type":1,"data":{"artistName":"Lana Del Rey","song":"Blue Jeans (RAC Remix)","file":"sound/2.mp3","genre":"Indie"},"answers":[{"valid":true,"artistName":"Lana Del Rey","image":"./img/artists/lana_del_rey.jpeg"},{"valid":false,"artistName":"Lykke Li","image":"./img/artists/lykke_li.jpg"},{"valid":false,"artistName":"Justice","image":"./img/artists/justice.jpg"}]}`);
  const genreQuestion = JSON.parse(`{"type":2,"data":{"genreName":"Indie","description":"Инди-рок"},"answers":[{"valid":true,"song":"Blue Jeans (RAC Remix)","file":"sound/2.mp3"},{"valid":true,"song":"Breaking It Up (Familjen Remix)","file":"sound/3.mp3"},{"valid":false,"song":"Justice - D.A.N.C.E.","file":"sound/1.mp3"}]}`);
  const questions = [artistQuestion, genreQuestion, genreQuestion];

  describe(`Win Test`, () => {
    gameData.questions = Object.assign([], questions);

    questions.forEach((item, i, array) => {
      switch (item.type) {
        case gameData.GENRE_QUESTION_TYPE:
          gameData.answer(item.answers[0], item.answers[1]);
          break;
        case gameData.ARTIST_QUESTION_TYPE:
          gameData.answer(item.answers[0]);
          break;
      }
    });

    it(`state should be WIN_STATE === 3`, () => {
      assert.equal(gameData.WIN_STATE, gameData.gameState.state);
    });
  });
});
