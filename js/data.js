/**
 * Created by kleone on 01.06.2017.
 */
export const gameInfo = Object.freeze({
  'gameName': `Угадай Мелодию`,
  'rules': `Правила просты&nbsp;— за&nbsp;2 минуты дать
  максимальное количество правильных ответов.<br>
  Удачи!`
});

const HOUSE = `House`;
const INDIE = `Indie`;
export const genres = Object.freeze(new Set([
  HOUSE,
  INDIE
]));

const LYKKE_LI = `Lykke Li`;
const LANA_DEL_REY = `Lana Del Rey`;
const JUSTICE = `Justice`;

const artists = [];
const songs = [];

createArtist(LYKKE_LI, `/img/artists/lykke_li.jpg`);
createArtist(LANA_DEL_REY, `/img/artists/lana_del_rey.jpeg`);
createArtist(JUSTICE, `/img/artists/justice.jpg`);

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

export function getRandomArtist() {
  const randomIndex = Math.round((artists.length - 1) * Math.random());
  const randomArtist = artists[randomIndex];

  return randomArtist;
}

const ARTIST_ANSWER_CASE_COUNT = 3;
export function getRandomWithCorrectArtist(correctArtistObject) {
  // здесь нужно sort вставить хитрый, чтобы артисты в тройке не повторялись

  const resultArtists = [];

  for (let i = 0; i < ARTIST_ANSWER_CASE_COUNT; i++) {
    resultArtists.push(getRandomArtist());
  }

  resultArtists[Math.round((resultArtists.length - 1) * Math.random())] = correctArtistObject;

  return resultArtists;
}
