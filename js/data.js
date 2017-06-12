/**
 * Created by kleone on 01.06.2017.
 */
import {getTempData} from './temp-data-assembler.js';
import main from './main.js';
import failScreen from './level-fail-screen.js';
import successScreen from './level-success-screen.js';

export const ARTIST_QUESTION_TYPE = 1;
export const GENRE_QUESTION_TYPE = 2;

export const START_STATE = 1;
export const GAME_STATE = 2;
export const WIN_STATE = 3;
export const GAME_OVER_STATE = 4;

export let questions = getTempData();

let timerInterval;

//  ***********
export const initGameState = Object.freeze({
  'time': 120,
  "lifes": 3,
  'currentState': START_STATE,
  "correctAnswers": 0,
  "incorrectAnswers": 0,
  "currentQuestion": null,
  "currentQuestionIndex": 0
});

const statistics = Object.freeze([
  {time: 20, answers: 10},
  {time: 32, answers: 10},
  {time: 44, answers: 10},
  {time: 20, answers: 8},
  {time: 50, answers: 7}
]);

export let gameState;

export const gameInfo = Object.freeze({
  'gameName': `Угадай Мелодию`,
  'rules': `Правила просты&nbsp;— за&nbsp;${Math.round(initGameState.time / 60)} минуты дать
  максимальное количество правильных ответов.<br>
  Удачи!`
});

export function getPercentHighscore() {
  return `100%`;
}

export function startGame() {
  gameState = Object.assign({}, initGameState);


  main.screenView.showQuestion();

  timerInterval = setInterval(updateTimer, 1000);

  updateTimer();
}

export function nextQuestion() {
  gameState.currentQuestionIndex++;

  if (gameState.currentQuestionIndex >= questions.length) {
    gameWin();
  } else {
    main.screenView.showQuestion();
  }
}

export function answer(...answers) {
  let correct = true;
  answers.forEach((item, i, array) => {
    if (item.valid && !item.selected) {
      correct = false;
    }

    if (!item.valid && item.selected) {
      correct = false;
    }
  });

  if (!correct) {
    gameState.lifes--;
    gameState.incorrectAnswers++;

    if (!gameState.lifes) {
      gameOver();
      return;
    }

    nextQuestion();
  } else {
    gameState.correctAnswers++;
    nextQuestion();
  }
}

function updateTimer() {
  gameState.time--;

  const timerMin = [...document.getElementsByClassName(`timer-value-mins`)][0];
  const timerSec = [...document.getElementsByClassName(`timer-value-secs`)][0];

  const minutes = Math.floor(gameState.time / 60);
  const seconds = gameState.time - (minutes * 60);

  timerMin.innerHTML = minutes.toString().length === 1 ? `0` + minutes : minutes;
  timerSec.innerHTML = seconds.toString().length === 1 ? `0` + seconds : seconds;

  if (!gameState.time) {
    gameOver();
  }
}

function calculateStats() {
  const stats = Object.assign([], statistics);
  stats.push({answers: gameState.correctAnswers, time: gameState.time, isPlayerResult: true});

  stats.sort((a, b) => {
    return b.answers - a.answers || b.time - a.time;
  });

  console.log(stats);
}

function gameWin() {
  clearInterval(timerInterval);

  gameState.state = WIN_STATE;

  calculateStats();
  main.screenView.showScreen(successScreen());
}

function gameOver() {
  clearInterval(timerInterval);

  gameState.state = GAME_OVER_STATE;

  main.screenView.showScreen(failScreen());
}
