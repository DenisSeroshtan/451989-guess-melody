import BaseModel from '../base-model.js';
import {BaseAdapter} from '../base-model.js';
import {USERNAME} from '../data.js';

const resultAdapter = new class extends BaseAdapter {

}();

class ResultModel extends BaseModel {

  get urlRead() {
    return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/:${USERNAME}`;
  }

  get urlWrite() {
    return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/:${USERNAME}`;
  }

  send(data) {
    super.send(data, resultAdapter);
  }

  load() {
    return super.load(resultAdapter);
  }
}

export default new ResultModel();
