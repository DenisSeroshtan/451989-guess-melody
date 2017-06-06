/**
 * Created by kleone on 01.06.2017.
 */
import {getTempData} from './temp-data-assembler.js';

export const ARTIST_QUESTION_TYPE = 1;
export const GENRE_QUESTION_TYPE = 2;
export const questions = getTempData();


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

export function getPercentHighscore() {
  return `100%`;
}
