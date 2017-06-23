import BaseModel from '../base-model.js';
import {BaseAdapter} from '../base-model.js';

const resultAdapter = new class extends BaseAdapter {

}();

class ResultModel extends BaseModel {
  send(data) {
    super.send(data, resultAdapter);
  }
}

export default new ResultModel();
