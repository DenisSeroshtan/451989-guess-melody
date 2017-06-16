/**
 * Created by kleone on 01.06.2017.
 */
import * as gameState from './state.js';

setInterval(updateTimer, 1000);

const initStatistics = Object.freeze([
  {time: 20, answers: 10},
  {time: 32, answers: 10},
  {time: 44, answers: 10},
  {time: 20, answers: 8},
  {time: 50, answers: 7}
]);

export const gameInfo = Object.freeze({
  'gameName': `Угадай Мелодию`,
  'rules': `Правила просты&nbsp;— за&nbsp;${Math.round(gameState.initState.time / 60)} минуты дать
  максимальное количество правильных ответов.<br>
  Удачи!`
});

export function getPercentHighscore(correctAnswers) {
  const stats = Object.assign([], initStatistics);
  stats.push({answers: correctAnswers, time: gameState.getGameTime(), isPlayerResult: true});

  stats.sort((a, b) => {
    return b.answers - a.answers || a.time - b.time;
  });

  const playerIndex = stats.findIndex((item) => {
    if (item.isPlayerResult) {
      return true;
    }

    return false;
  });

  const result = 100 - ((playerIndex + 1) / stats.length) * 100;
  return Math.floor(result) + `%`;
}

function updateTimer() {
  if (gameState.getCurrentState() === gameState.GAME_SCREEN) {
    gameState.setTime(gameState.getTimeLeft() - 1);

    if (!gameState.getTimeLeft()) {
      return;
    }

    const timerMin = document.getElementsByClassName(`timer-value-mins`)[0];
    const timerSec = document.getElementsByClassName(`timer-value-secs`)[0];

    const minutes = Math.floor(gameState.getTimeLeft() / 60);
    const seconds = gameState.getTimeLeft() - (minutes * 60);

    timerMin.innerHTML = minutes.toString().length === 1 ? `0` + minutes : minutes;
    timerSec.innerHTML = seconds.toString().length === 1 ? `0` + seconds : seconds;
  }
}
