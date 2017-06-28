import gameModel from './game/game-model.js';

const USERNAME = `451989`;
export const SERVER_URL = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/${USERNAME}`;

export const gameInfo = Object.freeze({
  'gameName': `Угадай Мелодию`,
  'rules': `Правила просты&nbsp;— за&nbsp;${Math.round(gameModel.initState.time / 60)} минуты дать
  максимальное количество правильных ответов.<br>
  Удачи!`
});
