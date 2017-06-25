/**
 * Created by kleone on 01.06.2017.
 */
import gameModel from './game/game-model.js';

export const USERNAME = `451989`;

export const gameInfo = Object.freeze({
  'gameName': `Угадай Мелодию`,
  'rules': `Правила просты&nbsp;— за&nbsp;${Math.round(gameModel.initState.time / 60)} минуты дать
  максимальное количество правильных ответов.<br>
  Удачи!`
});

