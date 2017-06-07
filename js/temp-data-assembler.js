/**
 * Created by Kleon on 06.06.2017.
 */

const ARTIST_QUESTION_TYPE = 1;
const GENRE_QUESTION_TYPE = 2;

//  ***********
export const HOUSE_GENRE_NAME = `House`;
export const INDIE_GENRE_NAME = `Indie`;
const genres = {};
createGenre(HOUSE_GENRE_NAME, `Хаус`);
createGenre(INDIE_GENRE_NAME, `Инди-рок`);
function createGenre(genre, description) {
  genres[genre] = {
    'genreName': genre,
    'description': description
  };
}

//  ***********
const LYKKE_LI = `Lykke Li`;
const LANA_DEL_REY = `Lana Del Rey`;
const JUSTICE = `Justice`;
const artists = {};
createArtist(LYKKE_LI, `./img/artists/lykke_li.jpg`);
createArtist(LANA_DEL_REY, `./img/artists/lana_del_rey.jpeg`);
createArtist(JUSTICE, `./img/artists/justice.jpg`);
function createArtist(artist, image) {
  artists[artist] = {
    'artistName': artist,
    'image': image
  };
}

//  ***********
const songs = {};
createSong(LANA_DEL_REY, `Blue Jeans (RAC Remix)`, `sound/2.mp3`, INDIE_GENRE_NAME);
createSong(LYKKE_LI, `Breaking It Up (Familjen Remix)`, `sound/3.mp3`, INDIE_GENRE_NAME);
createSong(JUSTICE, `Justice - D.A.N.C.E.`, `sound/1.mp3`, HOUSE_GENRE_NAME);
function createSong(artist, song, file, genre) {
  songs[song] = {
    'artistName': artist,
    'song': song,
    'file': file,
    'genre': genre
  };
}

const questions = [];

createQuestion(GENRE_QUESTION_TYPE, genres[INDIE_GENRE_NAME], new Set([
  createGenreAnser(true, songs[`Blue Jeans (RAC Remix)`]),
  createGenreAnser(true, songs[`Breaking It Up (Familjen Remix)`]),
  createGenreAnser(false, songs[`Justice - D.A.N.C.E.`])
]));

createQuestion(ARTIST_QUESTION_TYPE, songs[`Blue Jeans (RAC Remix)`], new Set([
  createArtistAnswer(true, artists[LANA_DEL_REY]),
  createArtistAnswer(false, artists[LYKKE_LI]),
  createArtistAnswer(false, artists[JUSTICE])
]));

createQuestion(ARTIST_QUESTION_TYPE, songs[`Justice - D.A.N.C.E.`], new Set([
  createArtistAnswer(true, artists[JUSTICE]),
  createArtistAnswer(false, artists[LYKKE_LI]),
  createArtistAnswer(false, artists[LANA_DEL_REY])
]));



function createQuestion(type, data, answers) {
  questions.push({
    'type': type,
    'data': data,
    'answers': answers
  });
}

function createArtistAnswer(valid, artist) {
  return {'valid': valid, 'artistName': artist.artistName, 'image': artist.image};
}

function createGenreAnser(valid, song) {
  return {'valid': valid, 'song': song.song, 'file': song.file};
}

export function getTempData() {
  return questions;
}
