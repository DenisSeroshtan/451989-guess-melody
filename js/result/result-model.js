import BaseModel from '../base-model.js';
import {BaseAdapter} from '../base-model.js';
import {SERVER_URL} from '../data.js';


const resultAdapter = new class extends BaseAdapter {
  preprocess(data) {
    if (!data) {
      return [];
    }

    data.forEach((item, index) => {
      if (!item.hasOwnProperty(`answers`) || !item.hasOwnProperty(`time`)) {
        data.splice(index, 1);
      }
    });
    return data;
  }

  toServer(data) {
    return JSON.stringify(data);
  }
}();

class ResultModel extends BaseModel {
  constructor() {
    super();

    this._stats = [];
  }

  get urlRead() {
    return SERVER_URL;
  }

  get urlWrite() {
    return SERVER_URL;
  }

  send(data) {
    super.send(data, resultAdapter);
  }

  load() {
    return super.load(resultAdapter);
  }
}

export default new ResultModel();
