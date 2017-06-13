import GameArtistView from './game-artist-view.js';
import GameGenreView from './game-genre-view.js';
import {renderState} from '../main.js';
import * as state from '../state.js';

const artistView = new GameArtistView();
const genreView = new GameGenreView();

artistView.onAnswer = onAnswer;
genreView.onAnswer = onAnswer;

function onAnswer(...answerIndexes) {
  state.answer(...answerIndexes);
  renderState();
}

export function show() {
  switch (state.getCurrentQuestion().type) {
    case state.ARTIST_QUESTION_TYPE:
      artistView.create();
      artistView.show();
      break;
    case state.GENRE_QUESTION_TYPE:
      genreView.create();
      genreView.show();
      break;
  }
}

