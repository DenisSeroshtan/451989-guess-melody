import BaseModel from '../base-model.js';
import {BaseAdapter} from '../base-model.js';

const resultAdapter = new class extends BaseAdapter {
  constructor() {
    super();
  }
}();

class ResultModel extends BaseModel {
  constructor() {
    super();
  }

  send(data) {
    super.send(data, resultAdapter);
  }
}

export default new ResultModel();
