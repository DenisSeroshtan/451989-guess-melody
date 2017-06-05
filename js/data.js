/**
 * Created by kleone on 01.06.2017.
 */
import * as utils from './utils';

export const initGameState = Object.freeze({
  'time': 120,
  "correctAnswers": 0
});

export const gameInfo = Object.freeze({
  'gameName': `Угадай Мелодию`,
  'rules': `Правила просты&nbsp;— за&nbsp;${Math.round(initGameState.time / 60)} минуты дать
  максимальное количество правильных ответов.<br>
  Удачи!`
});

const ARTISTS_IN_SCREEN = 3;

//  ***********
export const HOUSE = `House`;
export const INDIE = `Indie`;
const genres = [];
createGenre(HOUSE);
createGenre(INDIE);

//  ***********
const LYKKE_LI = `Lykke Li`;
const LANA_DEL_REY = `Lana Del Rey`;
const JUSTICE = `Justice`;
const artists = [];
createArtist(LYKKE_LI, `/img/artists/lykke_li.jpg`);
createArtist(LANA_DEL_REY, `/img/artists/lana_del_rey.jpeg`);
createArtist(JUSTICE, `/img/artists/justice.jpg`);

//  ***********
const songs = [];
createSong(LANA_DEL_REY, `Blue Jeans (RAC Remix)`, `Lana Del Rey - Blue Jeans (RAC Remix).mp3`, INDIE);
createSong(LYKKE_LI, `Breaking It Up (Familjen Remix)`, `Breaking It Up (Familjen Remix).mp3`, INDIE);
createSong(JUSTICE, `Justice - D.A.N.C.E.`, `Justice - D.A.N.C.E..mp3`, HOUSE);


function createSong(artist, song, file, genre) {
  songs.push({
    'artistName': artist,
    'song': song,
    'file': file,
    'genre': genre
  });
}

function createArtist(artist, image) {
  artists.push({
    'artistName': artist,
    'image': image
  });
}

function createGenre(genre) {
  genres[genre] = {
    'genreName': genre,
    'genreDescription': `Инди-рок`
  };
}

export function getGenreDescriptionByName(genreName) {
  if (genres.hasOwnProperty(genreName)) {
    return genres[genreName].genreDescription;
  } else {
    return `Неизвестный стиль`;
  }
}

export function getRandomArtist() {
  const randomIndex = Math.round((artists.length - 1) * Math.random());
  const randomArtist = artists[randomIndex];

  return randomArtist;
}

export function getSongsByGenre(genre) {
  const returnedArray = [];
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].genre === genre) {
      returnedArray.push(songs[i]);
    }
  }

  return returnedArray;
}

export function getInvalidAndValidArtists(validArtist) {
  const cloneArtists = artists.slice();
  const resultArtists = [];

  while (cloneArtists.length && resultArtists.length <= ARTISTS_IN_SCREEN) {
    const randomArtist = cloneArtists.splice(utils.getArrayRandomIndex(cloneArtists.length), 1)[0];
    if (validArtist.artistName === randomArtist.artistName) {
      continue;
    }

    resultArtists.push(randomArtist);
  }

  resultArtists.splice(utils.getArrayRandomIndex(resultArtists.length), 0, validArtist);

  return resultArtists;
}

export function getPercentHighscore() {
  return `100%`;
}
