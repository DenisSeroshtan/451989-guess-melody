import {getTempData} from '../temp-data-assembler.js';
import {deepCopy} from '../utils.js';

class GameModel {

  get correctAnswers() {
    const returnValue = this.state.questions.reduce((sum, question) => {
      return sum + (question.isUserAnswerCorrect ? 1 : 0);
    }, 0);

    return returnValue;
  }

  get gameTime() {
    return this.initState.time - this.state.time;
  }

  set timeLeft(value) {
    this.state.time = value;

    if (!this.state.time) {
      this.onFinishGame();
    }
  }
  get timeLeft() {
    return this.state.time;
  }

  get lifes() {
    return this.state.life;
  }

  get currentQuestion() {
    return this.state.questions[this.state.currentIndex];
  }

  get stats() {
    const stats = {};
    stats.correctAnswers = this.correctAnswers;
    stats.time = this.gameTime;

    return stats;
  }

  get isFail() {
    if (!this.timeLeft || !this.lifes) {
      return true;
    } else {
      return false;
    }
  }

  constructor() {
    this.QuestionType = {
      ARTIST: 1,
      GENRE: 2
    };

    this.questions = getTempData();
    this.initState = Object.freeze({
      'time': 120,
      'life': 3,
      'currentIndex': 0,
      'questions': deepCopy(this.questions)
    });
    this.state = Object.assign({}, this.initState);
  }

  resetGame() {
    this.state = Object.assign({}, this.initState, {questions: deepCopy(this.questions)});
  }

  answer(...selectedIndexes) {
    const answers = this.currentQuestion.answers;

    selectedIndexes.forEach((item) => {
      answers[item].isUserAnswer = true;
    });

    this.proceedCurrentAnswer();

    if (this.currentQuestion.isUserAnswerCorrect) {
      this.nextQuestion();
    } else {
      this.state.life = Math.max(0, this.state.life - 1);

      if (this.state.life < 1) {
        this.onFinishGame();
      } else {
        this.nextQuestion();
      }
    }
  }

  nextQuestion() {
    this.state.currentIndex++;

    if (this.state.currentIndex >= this.state.questions.length) {
      this.onFinishGame();
    } else {
      this.onNextQuestion();
    }
  }

  proceedCurrentAnswer() {
    const answers = this.currentQuestion.answers;

    let correct = true;

    answers.forEach((item) => {
      if ((item.valid && !item.isUserAnswer) || (!item.valid && item.isUserAnswer)) {
        correct = false;
      }
    });

    this.currentQuestion.isUserAnswerCorrect = correct;

    return correct;
  }

  onFinishGame() {

  }

  onNextQuestion() {

  }
}

const model = new GameModel();
export default model;
