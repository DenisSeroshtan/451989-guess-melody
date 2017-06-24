export class BaseAdapter {
  constructor() {
    if (new.target === BaseAdapter) {
      throw new Error();
    }
  }

  preprocess(data) {
    return data;
  }

  toServer(data) {
    return data;
  }
}

const defaultAdapter = new class extends BaseAdapter {}();

export default class BaseModel {
  get urlRead() {
    throw new Error(`Abstract method. Define the URL for model.`);
  }

  get urlWrite() {
    throw new Error(`Abstract method. Define the URL for model.`);
  }

  load(adapter = defaultAdapter) {
    return fetch(this.urlRead)
      .then((resp) => resp.json())
      .then(adapter.preprocess);
  }

  send(data, adapter = defaultAdapter) {
    const requestSettings = {
      body: adapter.toServer(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(this.urlWrite, requestSettings)
      .then(this.onUpload);
  }
}
