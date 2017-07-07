var view = (function () {
'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var AbstractView = function () {
  function AbstractView() {
    classCallCheck(this, AbstractView);
  }

  createClass(AbstractView, [{
    key: "render",
    value: function render() {
      return this.createElement(this.template);
    }
  }, {
    key: "bind",
    value: function bind() {}
  }, {
    key: "create",
    value: function create() {
      this._element = this.render();
      this.bind();
    }
  }, {
    key: "createElement",
    value: function createElement(template) {
      var outer = document.createElement("template");
      outer.innerHTML = template;
      return outer.content;
    }
  }, {
    key: "show",
    value: function show() {
      var mainScreen = document.querySelector(".main");
      mainScreen.innerHTML = "";
      mainScreen.appendChild(this.element);
    }
  }, {
    key: "template",
    get: function get$$1() {
      throw new Error("View should be defined");
    }
  }, {
    key: "element",
    get: function get$$1() {
      if (!this._element) {
        this.create();
      }

      return this._element;
    }
  }]);
  return AbstractView;
}();

return AbstractView;

}());

//# sourceMappingURL=view.js.map
