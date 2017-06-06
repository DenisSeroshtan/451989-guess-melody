/**
 * Created by kleone on 01.06.2017.
 */
import * as utils from './utils';

const ARTISTS_IN_SCREEN = 3;


//  ***********
export const HOUSE_GENRE_NAME = `House`;
export const INDIE_GENRE_NAME = `Indie`;
const genres = {};
createGenre(HOUSE_GENRE_NAME, `Хаус`);
createGenre(INDIE_GENRE_NAME, `Инди-рок`);

//  ***********
const LYKKE_LI = `Lykke Li`;
const LANA_DEL_REY = `Lana Del Rey`;
const JUSTICE = `Justice`;
const artists = {};
createArtist(LYKKE_LI, `./img/artists/lykke_li.jpg`);
createArtist(LANA_DEL_REY, `./img/artists/lana_del_rey.jpeg`);
createArtist(JUSTICE, `./img/artists/justice.jpg`);

//  ***********
const songs = {};
createSong(LANA_DEL_REY, `Blue Jeans (RAC Remix)`, `sound/Lana Del Rey - Blue Jeans (RAC Remix).mp3`, INDIE_GENRE_NAME);
createSong(LYKKE_LI, `Breaking It Up (Familjen Remix)`, `sound/Lykke Li - Breaking It Up (Familjen Remix).mp3`, INDIE_GENRE_NAME);
createSong(JUSTICE, `Justice - D.A.N.C.E.`, `sound/Justice - D.A.N.C.E..mp3`, HOUSE_GENRE_NAME);

//  ***********
export const ARTIST_QUESTION_TYPE = 1;
export const GENRE_QUESTION_TYPE = 2;
export const questions = [];

createQuestion(ARTIST_QUESTION_TYPE, songs[`Blue Jeans (RAC Remix)`], new Set([
  createAnswer(true, artists[LANA_DEL_REY]),
  createAnswer(false, artists[LYKKE_LI]),
  createAnswer(false, artists[JUSTICE])
]));

createQuestion(ARTIST_QUESTION_TYPE, songs[`Justice - D.A.N.C.E.`], new Set([
  createAnswer(true, artists[JUSTICE]),
  createAnswer(false, artists[LYKKE_LI]),
  createAnswer(false, artists[LANA_DEL_REY])
]));

createQuestion(GENRE_QUESTION_TYPE, genres[INDIE_GENRE_NAME], new Set([
  createAnswer(true, songs[`Blue Jeans (RAC Remix)`]),
  createAnswer(true, songs[`Breaking It Up (Familjen Remix)`]),
  createAnswer(false, songs[`Justice - D.A.N.C.E.`])
]));

//  ***********
export const initGameState = Object.freeze({
  'time': 120,
  "correctAnswers": 0,
  "currentQuestion": null,
  "currentQuestionIndex": 0
});
export let gameState;
resetGameState();

export const gameInfo = Object.freeze({
  'gameName': `Угадай Мелодию`,
  'rules': `Правила просты&nbsp;— за&nbsp;${Math.round(gameState.time / 60)} минуты дать
  максимальное количество правильных ответов.<br>
  Удачи!`
});

export function resetGameState() {
  gameState = Object.assign({}, initGameState);
}

function createSong(artist, song, file, genre) {
  songs[song] = {
    'artistName': artist,
    'song': song,
    'file': file,
    'genre': genre
  };
}

function createArtist(artist, image) {
  artists[artist] = {
    'artistName': artist,
    'image': image
  };
}

function createQuestion(type, data, answers) {
  questions.push({
    'type': type,
    'data': data,
    'answers': answers
  });
}

function createAnswer(valid, data) {
  return {'valid': valid, 'data': data};
}

function createGenre(genre, description) {
  genres[genre] = {
    'genreName': genre,
    'description': description
  };
}

export function getRandomArtist() {
  const randomIndex = Math.round((artists.length - 1) * Math.random());
  const randomArtist = artists[randomIndex];
  return randomArtist;
}

export function getSongByArtistName(artistName) {
  for (let i in songs) {
    if (songs[i].artistName === artistName) {
      return songs[i];
    }
  }

  return null;
}

const MAX_CORRECT_ANSWERS = 2;
const MAX_ANSWERS = 4;
export function getGenreQuestionSongs(correctGenre) {
  let correctSongs = getSongsByGenreName(correctGenre.genreName);

  const correctAnswerCount = Math.min(utils.getRandomIndex(MAX_CORRECT_ANSWERS, 1), correctSongs.length); // Случайное количество правильных ответов в вопросе
  correctSongs = utils.shuffleArray(correctSongs); // перемешать правильные ответы между собой
  correctSongs.splice(0, correctAnswerCount); // отрезать часть правильных ответов до значения MAX_CORRECT_ANSWERS

  const resultSongs = [...correctSongs];

  for (let i = 0; i < Math.min(songs.length, MAX_ANSWERS); i++) {
    const checkedSong = songs[i];

    let hasCoincidence = false;
    for (let j = 0; j < correctSongs.length; j++) {
      if (correctSongs[j].song === checkedSong.song) {
        hasCoincidence = true;
      }
    }

    if (hasCoincidence) {
      continue;
    } else {
      resultSongs.push(checkedSong);
    }
  }

  return resultSongs;
}

export function getSongsByGenreName(genreName) {
  const returnedArray = [];
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].genre === genreName) {
      returnedArray.push(songs[i]);
    }
  }

  return returnedArray;
}

export function getRandomGenre() {
  const randomGenre = genres[utils.getRandomIndexByArrayLength(genres.length)];
  return randomGenre;
}


export function getInvalidAndValidArtists(validArtist) {
  const cloneArtists = artists.slice();
  const resultArtists = [];

  while (cloneArtists.length && resultArtists.length <= ARTISTS_IN_SCREEN) {
    const randomArtist = cloneArtists.splice(utils.getRandomIndexByArrayLength(cloneArtists.length), 1)[0];
    if (validArtist.artistName === randomArtist.artistName) {
      continue;
    }

    resultArtists.push(randomArtist);
  }

  resultArtists.splice(utils.getRandomIndexByArrayLength(resultArtists.length), 0, validArtist);
  return resultArtists;
}

export function getPercentHighscore() {
  return `100%`;
}
