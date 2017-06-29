import gameModel from './game/game-model.js';

export function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

const preloadData = {};
export function preloadAudio(questions, successFunction, failFunction) {
  preloadData.files = [];
  preloadData.successFunction = successFunction;
  preloadData.failFunction = failFunction;

  for (let question of questions) {
    switch (question.type) {
      case gameModel.QuestionType.ARTIST:
        preloadData.files.push(question.data.file);
        break;
      case gameModel.QuestionType.GENRE:
        preloadData.files = preloadData.files.concat(getFilesFromAnswers(question.answers));
        break;
    }
  }

  try {
    loadFile();
  } catch (error) {
    preloadData.failFunction();
  }
}

function loadFile() {
  let player = new Audio();
  player.addEventListener(`canplaythrough`, audioLoadedHandler);
  if (preloadData.files[0]) {
    player.src = preloadData.files[0];
  } else {
    audioLoadedHandler();
  }
}

function audioLoadedHandler(event) {
  preloadData.files.shift();

  if (!preloadData.files.length) {
    preloadData.successFunction();
  } else {
    loadFile();
  }
}

function getFilesFromAnswers(answers) {
  const returnArray = [];

  for (let answer of answers) {
    returnArray.push(answer.file);
  }

  return returnArray;
}
