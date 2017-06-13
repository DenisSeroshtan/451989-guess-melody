export default class AbstractView {

  get template() {
    throw new Error(`View should be defined`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }

  render() {
    return this.createElement(this.template);
  }

  bind() {

  }

  createElement(template){
    const outer = document.createElement(`div`);
    outer.innerHTML = template;
    return outer;
  }
}
