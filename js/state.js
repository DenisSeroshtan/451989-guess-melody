import {getTempData} from './temp-data-assembler.js';
import {deepCopy} from './utils.js';

const questions = getTempData();

export const WELCOME_SCREEN = 1;
export const GAME_SCREEN = 2;
export const RESULT_SCREEN = 3;

export const ARTIST_QUESTION_TYPE = 1;
export const GENRE_QUESTION_TYPE = 2;

export const initState = Object.freeze({
  'time': 120,
  'life': 3,
  'currentIndex': 0,
  "currentScreen": WELCOME_SCREEN,
  'questions': deepCopy(questions)
});

export let state = Object.assign({}, initState);

export function isFail() {
  if (!getTimeLeft() || !getLifes()) {
    return true;
  } else {
    return false;
  }
}

export function setTime(value) {
  state.time = value;

  if (!state.time) {
    finishGame();
  }
}

export function getGameTime() {
  return initState.time - state.time;
}

export function getTimeLeft() {
  return state.time;
}

export function getLifes() {
  return state.life;
}


export function getCurrentState() {
  return state.currentScreen;
}

export function getCurrentQuestion() {
  return state.questions[state.currentIndex];
}

export function showGame() {
  state.currentScreen = GAME_SCREEN;
}

export function resetGame() {
  state = Object.assign({}, initState, {questions: deepCopy(questions)});
}

export function answer(...selectedIndexes) {
  if (getCurrentState() !== GAME_SCREEN) {
    return;
  }

  const currentQuestion = getCurrentQuestion();
  const answers = currentQuestion.answers;

  selectedIndexes.forEach((item) => {
    answers[item].isUserAnswer = true;
  });

  proceedCurrentAnswer();

  if (currentQuestion.isUserAnswerCorrect) {
    nextQuestion();
  } else {
    state.life--;

    if (state.life < 1) {
      finishGame();
    } else {
      nextQuestion();
    }
  }
}

export function getCorrectAnswers() {
  const returnValue = state.questions.reduce((sum, question) => {
    return sum + (question.isUserAnswerCorrect ? 1 : 0);
  }, 0);

  return returnValue;
}

function nextQuestion() {
  state.currentIndex++;

  if (state.currentIndex >= state.questions.length) {
    finishGame();
  }
}

function proceedCurrentAnswer() {
  const answers = getCurrentQuestion().answers;

  let correct = true;

  answers.forEach((item) => {
    if ((item.valid && !item.isUserAnswer) || (!item.valid && item.isUserAnswer)) {
      correct = false;
    }
  });

  getCurrentQuestion().isUserAnswerCorrect = correct;

  return correct;
}

function finishGame() {
  state.currentScreen = RESULT_SCREEN;
}
