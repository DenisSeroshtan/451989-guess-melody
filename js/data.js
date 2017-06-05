/**
 * Created by kleone on 01.06.2017.
 */
import * as utils from './utils';

const ARTISTS_IN_SCREEN = 3;

//  ***********
export const HOUSE_GENRE_NAME = `House`;
export const INDIE_GENRE_NAME = `Indie`;
const genres = [];
createGenre(HOUSE_GENRE_NAME, `Хаус`);
createGenre(INDIE_GENRE_NAME, `Инди-рок`);

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
createSong(LANA_DEL_REY, `Blue Jeans (RAC Remix)`, `sound/Lana Del Rey - Blue Jeans (RAC Remix).mp3`, INDIE_GENRE_NAME);
createSong(LYKKE_LI, `Breaking It Up (Familjen Remix)`, `sound/Lykke Li - Breaking It Up (Familjen Remix).mp3`, INDIE_GENRE_NAME);
createSong(JUSTICE, `Justice - D.A.N.C.E.`, `sound/Justice - D.A.N.C.E..mp3`, HOUSE_GENRE_NAME);

//  ***********
export const gameState = Object.freeze({
  'time': 120,
  "correctAnswers": 0,
  "genreObject": getRandomGenre(),
  "artistObject": getRandomArtist()
});

export const gameInfo = Object.freeze({
  'gameName': `Угадай Мелодию`,
  'rules': `Правила просты&nbsp;— за&nbsp;${Math.round(gameState.time / 60)} минуты дать
  максимальное количество правильных ответов.<br>
  Удачи!`
});

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

function createGenre(genre, description) {
  genres.push({
    'genreName': genre,
    'description': description
  });
}

export function getRandomArtist() {
  const randomIndex = Math.round((artists.length - 1) * Math.random());
  const randomArtist = artists[randomIndex];
  return randomArtist;
}

export function getSongByArtistName(artistName) {
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].artistName === artistName) {
      return songs[i];
    }
  }

  return null;
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
  const randomGenre = genres[utils.getArrayRandomIndex(genres.length)];
  console.log(randomGenre);
  return randomGenre;
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
